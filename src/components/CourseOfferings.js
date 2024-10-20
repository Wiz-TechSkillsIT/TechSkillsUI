// src/components/CourseOfferings.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CourseOfferings.css';  // Optional: Add your styles here

const CourseOfferings = () => {
  const offerings = [
    {
      title: 'Java to Spring Boot & AWS',
      description: 'Master Java programming from basics to advanced Spring Boot and AWS services.',
      levels: 'Levels 1 (Free), 2, 3',
      link: '/track-info-java-sql'  // Link to detailed course
    },
    {
      title: 'Node.js Full Stack',
      description: 'Learn Node.js and build REST APIs, full-stack apps, and secure microservices.',
      levels: 'Levels 1 (Free), 2, 3',
      link: '/mern-stack'  // Link to detailed course
    },
    {
      title: 'React Development',
      description: 'Become a job-ready React developer by mastering the latest React features and Redux.',
      levels: 'Levels 1 (Free), 2, 3',
      link: '/react-course'  // Add appropriate link
    },
    {
      title: 'Angular Development',
      description: 'Learn Angular 18 from fundamentals to advanced concepts and real-world projects.',
      levels: 'Levels 1 (Free), 2, 3',
      link: '/angular-course'  // Add appropriate link
    },
    {
      title: 'Database Programming',
      description: 'Learn SQL and NoSQL databases, optimized queries, and scaling techniques.',
      levels: 'Level 1 (Free), Level 2 (Paid)',
      link: '/db-programming'  // Add appropriate link
    },
  ];

  return (
    <div className="course-offerings-container">
      {offerings.map((offering, index) => (
        <div key={index} className="course-card">
          <h3>{offering.title}</h3>
          <p>{offering.description}</p>
          <p><strong>{offering.levels}</strong></p>
          <Link to={offering.link}>
            <button className="learn-more-btn">Learn More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseOfferings;
