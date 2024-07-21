import { useSearchParams } from "react-router-dom";
import CourseInfo from "../components/courseinfo";
import PageHeading from "../components/pageheading";
import { useEffect, useState } from "react";


function CourseDetails(){

    const [param] = useSearchParams(); 
    const [id,setId] = useState('');

    useEffect(()=>{
        setId(param.get('id')); 
    },[param]); 

    return (
        <div>
            <PageHeading id={id} />
            <CourseInfo id={id}/>
        </div>
    )

}

export default CourseDetails;