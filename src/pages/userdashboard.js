import React, { useEffect, useRef, useState } from "react";
import { PanelMenu } from "primereact/panelmenu";
import { Card } from "primereact/card";
import "../css/user-dashboard.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


const UserDashboard = () => {
  const [userName, setUserName] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const toast = useRef(null);
  const dispatch = useDispatch();
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

  const items = [
    {
      label: 'Enrolled Courses',
      icon: 'pi pi-cloud',
      command: () => {
       }
  },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => {
       }
  },
    {
        label: 'Sign Out',
        icon: 'pi pi-sign-out',
        command: () => {
            localStorage.clear();
            toast.current.show({ severity: 'info', summary: 'Signed out', detail: 'You have logged out', life: 3000 });
            dispatch({ type: "CLEAR_LIST" });

            navigate("/");
         }
    }
];
  
  const loadVideosPage= (courseId)=>{
    navigate(`/course-videos/${courseId}`);
}

  return (
    <div className="custom-container">
  {/* Sidebar */}
  <div className="custom-sidebar">
    <div className="card">
      <h2 className="course-track">{`Welcome ${userName}`}</h2>
        <PanelMenu model={items} className="w-full md:w-20rem" />
        <Toast ref={toast} />
         
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
