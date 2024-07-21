import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import courses from '../data/courses'; 
import videos from '../data/videos';
import modules from '../data/modules';
import subCourses from '../data/subcourses';
import '../css/pageHeading.css';

function VideoPageHeading(){

    const msgs = useRef(null);
    const [param] = useSearchParams(); 
    const [courseId,setCourseId] = useState(param.get('id'));
    const [subCourseId,setsubCourseId] = useState(param.get('courseId'));
    const [courseName, setCourseName] = useState('');
    const [subCourseName, setSubCourseName] = useState('');
    
    useEffect(()=>{
        let course = courses.filter(c=>c._id === courseId);   
        setCourseName(course[0].name); 
        setSubCourseName(subCourses.filter(sc=>sc._id === subCourseId)[0].name)
    })
    return (
        <div className="page-heading-card" >
            <div className="page-heading-content" >
                <h1>{subCourseName}</h1>
                <h5>Course: {courseName} &nbsp;&nbsp; 
                    <span >      
                        <Link to={`/course-details?id=${courseId}`} style={{fontSize: '0.7em', textDecoration: 'none'}}>View Details</Link>
                    </span>
                </h5>
                </div>
            <div className="enroll-button">
                <button>ENROLL</button>
            </div>
    </div>  
    )
}

export default VideoPageHeading;