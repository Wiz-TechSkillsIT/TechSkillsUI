 
import React from 'react';
import '../css/courseDetails.css'
 

const SpringBootDetails = () => {
  return (
    <div className="course-detail-container">
      <h1>Java to Spring Boot & AWS</h1>
      <p>Master Java programming from basics to advanced Spring Boot and AWS services.</p>

      {/* Course Fee Section */}
      <section className="course-fee course-section">
        <h2>Course Fee</h2>
        <ul>
          <li><strong>Level 1 (Free)</strong>: Core Java</li>
          <li><strong>Level 2 (₹3,000)</strong>: Spring Boot, REST APIs, MySQL, AWS Basics</li>
          <li><strong>Level 3 (₹6,000)</strong>: Advanced Spring Boot with AWS, JWT Security, Microservices</li>
        </ul>
      </section>

      {/* Course Duration */}
      <section className="course-duration course-section">
        <h2>Course Duration</h2>
        <p>Level 1: 15 hours | Level 2: 20 hours | Level 3: 30 hours</p>
      </section>

      {/* Pre-requisites */}
      <section className="course-prerequisites course-section">
        <h2>Pre-requisites</h2>
        <p>Basic knowledge of programming in Java. Understanding of databases is a plus.</p>
      </section>

      {/* What You'll Learn */}
      <section className="learning-outcomes course-section">
        <h2>What You'll Learn</h2>
        <ul>
          <li>Understand the core concepts of Java and Spring Boot</li>
          <li>Develop REST APIs and integrate with databases</li>
          <li>Deploy applications on AWS using modern tools</li>
        </ul>
      </section>

      {/* Instructor Info */}
      <section className="instructor-info course-section">
        <h2>Instructor</h2>
        <p><strong>John Doe</strong>: A senior Java developer with over 10 years of experience in building enterprise-grade applications using Spring Boot and AWS.</p>
      </section>

      {/* Enrollment */}
      <section className="course-enroll-now">
        <button className="course-enroll-button">Enroll Now</button> {/* Link to enrollment/payment */}
      </section>

      {/* Fixed Enroll Button */}
      <button className="course-enroll-fixed">Enroll Now</button> {/* Fixed enroll button */}
    </div>
  );
};

export default SpringBootDetails;

