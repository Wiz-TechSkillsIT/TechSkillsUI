import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import '../css/CourseScrollPanel.css'
function ReviewsCommon(){

    const [reviews, setReviews] = useState([]);
    const ds = useRef(null);

    useEffect(()=>{
        //call API 

        let reviews =[
            {
             reviewMsg: "Had a good experience on learning Java in a deep and better understanding with the language.",
             "name": "Jeet Parekh" ,
             "rating": 5,
             "college": "Thodomal Shahani Engineering College, Mumbai",
             "featured": true
            },
            {
             reviewMsg: "Excellent experience. Enjoyed studying Java and also developed interest about coding language.",
             "name": "Reetika Satelkar" ,
             "rating": 5,
             "college": "Shree L.R Tiwari College of Engineering, Mumbai",
             "featured": true
            },
            {
             reviewMsg: "Overall a very good experience. This was my first programming course and I totally enjoyed learning Java because of Prof.Hirani's teaching. All credits to Hirani Sir. Thankyou so much for always being helpful",
             "name": "Bhaarat Kotak" ,
             "rating": 5,
             "college": "Thakur College of Engineering and Technology,Mumbai",
             "featured": true
            },
            {
             reviewMsg: "I would like to say that I have prepared for the OCPJP exam by learning from you. I still remember the syntax and the basic concepts of java because of the meticulous and the captivating way in which you taught us. I am from Electronics branch, yet I could understand the concept when you simplified the problems step by step. Thank you for it. :)",
             "name": "Surabhi P" ,
             "rating": 5,
             "college": "St. Francis Institute of Technology,Mumbai",
             "featured": true
            },
            {
             reviewMsg: "Sir u r absolute brilliant, one of the best proffesor I have ever experience. I have learn lot from u..handling..pressure ,be calm n composed. Ur's teaching skills r too very simple and effective..",
             "name": "Atul Upadhyay " ,
             "rating": 5,
             "college": "",
             "featured": true
            },
            {
             reviewMsg: "It has been an interesting experience at your Institute as I have learnt a lot. All staff was very warm and understanding. You're teaching is excellent sir , you are someone who devotes a great amount personnel effort to try to make teaching more interesting for students like us using various real life examples. Your contribution of providing free technical courses for students is just great. It was a great journey altogether . Keep up with the good work and thank you so much for constantly encouraging us since the first lecture, teachers like you are truly a blessing for us. Thankyou.",
             "name": "Vaibhavi Mestry" ,
             "rating": 5,
             "college": "Thakur college of Engineering,Mumbai",
             "featured": true
            },
            {
             reviewMsg: "Very well taught and complied course",
             "name": "Shubham Ambilkar" ,
             "rating": 5,
             "college": "Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai",
             "featured": true
            },
            {
             reviewMsg: "Sir has a next level of teaching which is professional level and not assiociated level.",
             "name": "Deljin V Jaison" ,
             "rating": 5,
             "college": "Fr. Conceicao Rodrigues College of Engineering, Mumbai",
             "featured": true
            },
            {
             reviewMsg: "Java course has helped me evolve in programming. I was familiar with C language but i wasnt good in any of the computer languages. Hirani Sir not only helped me get the OCPJP certificate easily but also has helped me get a command over JAVA. <BR>Hirani has always been supportive and the concepts that he has taught are always from the company requirements point of view, which are really very helpfull.<BR> Thank You Sir for making me grow as a programmer and developer.",
             "name": "Paras Kadam" ,
             "rating": 5,
             "college": "Watumull college of Engineering, Mumbai",
             "featured": true
            },
            {
             reviewMsg: "The course gave a more insight into the fundamental concept of Java. Our instructor gave a proper gudiance.",
             "name": "Isha Narendra Wadekar" ,
             "rating": 5,
             "college": "Vidyavardhini College of Engineering and Technology,, Mumbai",
             "featured": true
            },
            {
             reviewMsg: "Overall experience about the course is good.",
             "name": "Ajinkya Abhimanyu Pawar" ,
             "rating": 5,
             "college": "Shree L.R Tiwari College of Engineering, Mumbai",
             "featured": true
            }
         ]

         setReviews(reviews)
    },[]);

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                     <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.name}</div>
                                <div className="text-700">{data.reviewMsg}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.college}</span>
                                </span>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>
        );
    };

    const footer = <Button type="text" icon="pi pi-plus" label="See More" onClick={() => ds.current.load()} />;

    return( 
        <div >
            <div className="heading-container">
            <p className="heading-text"> Reviews of our past trainees</p>
            
        </div>
        <div className="course-scroll-panel">
            <div className="courses-container"> 
            <div className='review-card'>
            <DataScroller ref={ds} value={reviews} itemTemplate={itemTemplate} rows={2} loader footer={footer}  />

            </div>
            </div>
            
        </div>
        </div>
    )
}

export default ReviewsCommon;