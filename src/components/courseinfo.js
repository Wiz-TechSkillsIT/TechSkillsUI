import React, { useEffect, useRef, useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
 import subcourses from '../data/subcourses'; 
import courses from "../data/courses";
import { Card } from 'primereact/card';
import '../css/subcourses.css' 
import { useNavigate } from "react-router";
 

function CourseInfo(prop){
    const stepperRef = useRef(null);
    const [subCourses,setSubCourses] = useState([]);
    const navigate = useNavigate();

    const CourseCard = ({ serialNumber, title, shortDescription, price, label, tag,trackId }) => (
        <div className="course-card123">
        <div className="course-tag-container">
            <div className="course-tag">{tag === 'free'? 
            <img src='./images/free.png' /> : <img src='./images/premium.png' /> }</div>
        </div>
        <div className="course-content">
            <h3>{title}</h3>
            <p>{shortDescription}</p>
            <span className="course-label">Tech Level: {label}</span>
            <button className="course-button" onClick={()=>navigate('/course-videos?courseId=' + serialNumber + '&id=' +trackId )}>Go to videos</button>
             
        </div>
    </div>
    );

    useEffect(()=>{
        setSubCourses(
                subcourses.filter
                    (sc=>sc.trackId === prop.id))
        
    },[prop]); 

    return (
        <div className="course-list123">
        {subCourses.map((card, index) => (
            <CourseCard
                key={index}
                serialNumber={card._id}
                title={card.name}
                shortDescription={card.shortDescription}
                price={card.language}
                label={card.technicalWeightage}
                tag={card.type}
                trackId={card.trackId}
            />
        ))}
    </div>
         
    )
}

export default CourseInfo;