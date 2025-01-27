import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Videos from "../components/videos";
import PageHeading from "../components/pageheading";
import '../css/videos.css';
import VideoPageHeading from "../components/videopageheading";


function CourseVideos(){

    const { id } = useParams();
    
    useEffect(()=>{
         
         
    },[]); 
 

    return (
       <div>
          {/* <VideoPageHeading  /> */}
          <Videos id={id}/>
       </div>
    )
}

export default CourseVideos;