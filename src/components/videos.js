import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PanelMenu } from 'primereact/panelmenu';
import { Card } from 'primereact/card';
import subCourses from '../data/subcourses';
import modules from '../data/modules';
import videos from '../data/videos';
import '../css/sidebar.css'
function VideosPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [courseData, setCourseData] = useState({});
    const [moduleItems, setModuleItems] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [accessMessage, setAccessMessage] = useState('');
    const [param] = useSearchParams();
    const courseId = param.get('courseId');
    const navigate = useNavigate();

    useEffect(() => {
        checkUserAuthentication();
        initializePageData();
    }, []);

    const checkUserAuthentication = async () => {
        const isLoggedIn = Boolean(localStorage.getItem('user')); // Replace 'authToken' with actual key if different

        if (!isLoggedIn) {
            navigate('/login');
            return;
        }

        const enrolled = await fetchEnrollmentStatus();
        if (!enrolled) {
            await enrollUser();
        }
    };

    const fetchEnrollmentStatus = async () => {
        const response = await fetch(`/api/enrollment?courseId=${courseId}`);
        const data = await response.json();
        return data.enrolled;
    };

    const enrollUser = async () => {
        await fetch('/api/enrollment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ courseId })
        });
    };

    const initializePageData = () => {
        const course = subCourses.find(c => c._id === courseId);
        const courseModules = modules.filter(m => m.courseId === courseId);
        
        const items = courseModules.map(module => {
            const moduleVideos = videos
                .filter(video => video.moduleId === module._id)
                .map(video => createVideoItem(video, course.type === 'free'));

            return {
                label: module.name,
                icon: 'pi pi-list',
                items: moduleVideos
            };
        });

        setCourseData(course);
        setModuleItems(items);
    };

    const createVideoItem = (video, isFreeCourse) => ({
        label: video.title,
        icon: isFreeCourse ? 'pi pi-lock-open' : 'pi pi-lock',
        command: () => handleVideoClick(video, isFreeCourse),
    });

    const handleVideoClick = (video, isFreeCourse) => {
        if (isFreeCourse || courseData.type === 'free') {
            setSelectedVideo(video);
            setAccessMessage('');
        } else {
            setAccessMessage('Access Restricted: Please enroll to view this content.');
        }
        closeSidebar();
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="app">
            <div className="top-nav">
                <div className="hamburger" onClick={toggleSidebar}>☰</div>
            </div>
            <div className="container_video">
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} items={moduleItems} />
                <VideoPlayer video={selectedVideo} accessMessage={accessMessage} />
            </div>
        </div>
    );
}

function Sidebar({ isSidebarOpen, toggleSidebar, items }) {
    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar">
            <div className="sidebar-header">
                <div className="hamburger sidebar-hamburger" onClick={toggleSidebar}>☰</div>
                <div className="sidebar-title">Modules</div>
            </div>
            <div className="panel-menu-container">
                <PanelMenu model={items} className="w-full md:w-25rem" />
            </div>
        </div>
    );
}

function VideoPlayer({ video, accessMessage }) {
    const iframeSrc = video ? `https://player.vdocipher.com/v2/?otp=${video.otp}&playbackInfo=${video.playbackInfo}` : '';

    const videoContainerStyle = {
        width: '100%',
        maxWidth: '640px', // Adjusted width
        margin: 'auto',
    };

    const iframeStyle = {
        width: '100%',
        height: '360px', // Adjusted height
        border: 0
    };

    return (
        <div className="content">
            <div className="video-section" id="video-section">
                {accessMessage ? (
                    <Card title="Access Restricted">
                        <p>{accessMessage}</p>
                    </Card>
                ) : (
                    <>
                        
                        <div style={videoContainerStyle} title={video?.title || "Please select a video"}>
                            
                            <div style={videoContainerStyle}>
                                {video ? (
                                    <iframe
                                        src={iframeSrc}
                                        style={iframeStyle}
                                        allowFullScreen
                                    />
                                ) : (
                                    <p>Please select a video from the sidebar.</p>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default VideosPage;
