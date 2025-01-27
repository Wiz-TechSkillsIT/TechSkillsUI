import React, { useEffect, useState } from "react";
import "../css/VideoLayout.css";
import { PanelMenu } from "primereact/panelmenu";
import { Badge } from "primereact/badge";
import { useParams } from "react-router-dom";
import axios from "axios";
import courses from "../data/course_info_main";

const VideosPage = () => {
  const { id } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [course, setCourse] = useState(courses.find((c) => c.courseId == id));
  const [videoSrc, setVideoSrc] = useState(""); // State to store the iframe src
  const [expandedModules, setExpandedModules] = useState({}); // Track expanded state of modules
  const [currentVideoTitle, setCurrentVideoTitle] = useState("Loading..."); // Track the current video title

  useEffect(() => {
    // Initialize expandedModules state with the first module expanded
    const initialState = {};
    course?.modules.forEach((module, index) => {
      initialState[module.title] = index === 0; // Expand only the first module
    });
    setExpandedModules(initialState);

    // Load default video on initial page load
    fetchVideoData("40c985879d456a75b3c3e0987886037b", "Default Video Title");
  }, [course]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".side-menu") && !event.target.closest(".hamburger")) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchVideoData = async (code, title) => {
    if (!code) {
      console.error("Invalid video code:", code);
      alert("Failed to load the video. Video code is missing.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5005/api/video/vdocipher/otp", {
        code,
      });

      const { otp, playbackInfo } = response.data;
      const newSrc = `https://player.vdocipher.com/v2/?otp=${otp}&playbackInfo=${playbackInfo}`;
      setVideoSrc(newSrc); // Update iframe src
      setCurrentVideoTitle(title); // Update the current video title
      closeMenu(); // Close side menu after video click (mobile version)
    } catch (error) {
      console.error("Error fetching video data:", error.response?.data || error.message);
      alert("Failed to load the video. Please try again later.");
    }
  };

  const handleVideoClick = (video) => {
    if (!video?.code) {
      console.error("Invalid video object:", video);
      alert("This video cannot be played due to missing details.");
      return;
    }

    fetchVideoData(video.code, video.title);
  };

  const handleModuleToggle = (moduleTitle) => {
    setExpandedModules((prevState) => ({
      ...prevState,
      [moduleTitle]: !prevState[moduleTitle], // Toggle the expanded state of the clicked module
    }));
  };

  const items = course?.modules.map((module) => ({
    label: module.title,
    expanded: expandedModules[module.title], // Control the expanded state
    template: (item, options) => (
      <a
        className="flex align-items-center px-3 py-2 cursor-pointer"
        onClick={(e) => {
          e.preventDefault(); // Prevent default expansion/collapse behavior
          handleModuleToggle(module.title); // Manually toggle module
        }}
      >
        <span className={`pi pi-folder-open text-primary`} />
        <span className="mx-2">{module.title}</span>
      </a>
    ),
    items: module.videos.map((video) => ({
      label: video.title || "Untitled Video",
      playTime: video.playTime || "00:00",
      code: video.code || null,
      template: (item, options) => (
        <a
          className="flex align-items-center px-3 py-2 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevent the menu from collapsing
            handleVideoClick(video);
          }}
        >
          <span className={`pi pi-video text-primary`} />
          <span className={`mx-2 ${item.items ? "font-semibold" : ""}`}>
            {video.title}
          </span>
          {video.playTime && <Badge className="ml-auto" value={video.playTime} />}
        </a>
      ),
    })),
  }));

  return (
    <div className="container">
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="card flex justify-content-center">
          <div className="card">
            <h2 className="course-track">{course?.trackName}</h2> {/* Display Course Title */}
            
            <h4 className="course-title">Level:{course?.level} = {course?.title}</h4> {/* Display Course Title */}

            <div className="card-content">
              <div style={{ paddingTop: "10%", position: "relative" }}>
                <PanelMenu model={items} className="w-full md:w-25rem" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-player">
        <div className="card">
          <h3 className="video-title">{currentVideoTitle}</h3> {/* Display Current Video Title */}
          <div className="card-content">
            <div style={{ paddingTop: "56%", position: "relative" }}>
              {videoSrc ? (
                <iframe
                  src={videoSrc}
                  style={{
                    border: 0,
                    maxWidth: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                  }}
                  allowFullScreen
                  allow="encrypted-media"
                  title="Video Player"
                ></iframe>
              ) : (
                <p style={{ textAlign: "center" }}>Select a video to play.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
