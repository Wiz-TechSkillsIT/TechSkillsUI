import React, { useEffect, useState } from "react";
import { PanelMenu } from "primereact/panelmenu";
import { Card } from "primereact/card";
import "../css/user-dashboard.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { Button } from "primereact/button";

const UserDashboard = () => {
  const [userName, setUserName] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !token) {
      navigate("/auth"); // Redirect to login page if user is not logged in
      return;
    } else if (user.fname) {
      setUserName(user.fname);
    }

    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/api/courses/enrolledCourses/${user.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEnrolledCourses(response.data.courses || []);
      } catch (err) {
        //console.error("Error fetching enrolled courses:", err);
        //setError("Failed to fetch enrolled courses. Please try again later.");
        localStorage.clear();
        navigate('/auth')
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, [navigate]);

  const course = {
    trackName: `Welcome ${userName}`,
    level: 1,
    title: "",
    modules: [
      {
        title: "Navigation",
        videos: [
          { title: "Initializing Project", playTime: "02:54", code: "video1" },
          { title: "Install Dependencies", playTime: "08:39", code: "video2" },
        ],
      },
    ],
  };

  const items = course?.modules.map((module) => ({
    label: module.title,
    expanded: true, // Ensure module is always expanded
    template: (item, options) => (
      <div className="flex align-items-center px-3 py-2">
        <span className={`pi pi-folder-open text-primary`} />
        <span className="mx-2">Navigation Menu</span>
      </div>
    ),
    items: module.videos.map((video) => ({
      label: video.title || "Untitled Video",
      playTime: video.playTime || "00:00",
      code: video.code || null,
      template: (item, options) => (
        <a
          className="flex align-items-center px-3 py-2 cursor-pointer"
          onClick={(e) => {
            e.preventDefault(); // Prevent menu toggle
            e.stopPropagation(); // Prevent the menu from collapsing
            console.log(`Video clicked: ${video.title}`);
          }}
        >
          <span className={`pi pi-video text-primary`} />
          <span className={`mx-2 ${item.items ? "font-semibold" : ""}`}>{
            video.title
          }</span>
        </a>
      ),
    })),
  }));
  
  const loadVideosPage= (courseId)=>{
    navigate(`/course-videos/${courseId}`);
}

  return (
    <div className="custom-container">
  {/* Sidebar */}
  <div className="custom-sidebar">
    <div className="card">
      <h2 className="course-track">{course?.trackName}</h2>
      <h4 className="course-title">{course?.title}</h4>
      <PanelMenu model={items} className="w-full md:w-25rem" />
    </div>
  </div>

  {/* Main Content */}
  <div className="course-section">
    <h3>Enrolled Courses</h3>
    {loading ? (
      <p>Loading courses...</p>
    ) : error ? (
      <p style={{ color: "red" }}>{error}</p>
    ) : (
      <div className="course-grid">
       {enrolledCourses.map((course, idx) => {
        console.log(course)
  const header = (
<div className="card-header">
<img 
  alt={course.title} 
 // src={course?.image ? `/images/${course?.image}` : 'https://primefaces.org/cdn/primereact/images/usercard.png'} 
 src={'/images/nodejs.png'} 
 className="card-image"

/>
</div>
);
 // Pass course to the footer directly
 const footer = (
    <>
      <Button 
        label="Go to Videos" 
        icon="pi pi-check" 
        onClick={() => loadVideosPage(course.courseId)} 
      />
    </>
  );

  return (
    <Card
      key={idx} // Always include a key when rendering a list
      title={course?.title}
      subTitle={`Track: ${course.trackName}`}
      footer={footer}
      header={header}
      className="md:w-25rem"
    >
      
    </Card>
  );
})}
      </div>
    )}
  </div>
</div>
  );
};

export default UserDashboard;
