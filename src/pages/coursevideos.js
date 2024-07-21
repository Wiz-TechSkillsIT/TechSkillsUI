import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Videos from "../components/videos";
import PageHeading from "../components/pageheading";
import '../css/videos.css';
import VideoPageHeading from "../components/videopageheading";

function CourseVideos(){

    const [param] = useSearchParams(); 
    const [id,setId] = useState('');

    useEffect(()=>{
        setId(param.get('courseId')); 
    },[param]); 
 

    return (
       <div>
          <VideoPageHeading  />
          <Videos />
       </div>
    )
}

export default CourseVideos;