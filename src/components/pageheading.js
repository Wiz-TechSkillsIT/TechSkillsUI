import { useEffect, useRef, useState } from "react";
  import courses from '../data/courses'; 
import videos from '../data/videos';
import modules from '../data/modules';
import subCourses from '../data/subcourses';
import '../css/pageHeading.css';
import { useSearchParams } from "react-router-dom";

function PageHeading(props){

    const msgs = useRef(null);
    const [param] = useSearchParams(); 
    const [id,setId] = useState(param.get('id'));

    const [courseName, setCourseName] = useState('');
    const [numModules,setNumModules] = useState(0);
    const [numSubCourses,setNumSubCourses] = useState(0);
    const [numVideos,setNumVideos] = useState(0);
    const [playTime,setPlayTime] = useState('');
    const [videosArry,setVideosArry] = useState([]);

    useEffect(()=>{
        setId(param.get('id'));
        let course = courses.filter(c=>c._id === id);   
        setCourseName(course[0].name)  
        
        let subCoursesArry = subCourses.filter(s=>s.trackId === param.get('id'))
        setNumSubCourses(subCoursesArry.length);
         
        let modulesArry =[];
        
        subCoursesArry.forEach(sc=>{
            modulesArry.push(modules.filter(m=>m.courseId === sc._id));
        })
         let videoArry = [];
        modulesArry.forEach(m=>{
            m.forEach(mo=>{
                videoArry.push(videos.filter(v=>v.moduleId === mo._id));
            })
           
        });
        setVideosArry(videoArry)
         
        let num = 0; 
        let time=0;
        videosArry.forEach(v=>{
            v.forEach(vo=>{
                num = num+1;
                time = time + (parseFloat(vo.time)); 
            })
        })

        setNumModules(modulesArry.length);
        setNumVideos(num); 
        let minutes = time.toFixed(0); 
        let hours = minutes / 60; 
        minutes = minutes % 60; 

        setPlayTime(hours.toFixed(0) + ' hours, ' + minutes + ' minutes'); 
    },[param,id,playTime]);


    return (
        <div className="page-heading-card" >
        <div className="page-heading-content" >
            
            <h1>{courseName}</h1>
            <p>Number of Sub-Courses: <span className="stats">{numSubCourses}</span></p>
            <p>Number of Videos: <span className="stats">{numVideos}</span></p>
            <p>Content Time: <span className="stats">{playTime}</span></p>
        </div>
        <div className="enroll-button">
            <button>ENROLL</button>
        </div>
</div>
    
    )
}

export default PageHeading;