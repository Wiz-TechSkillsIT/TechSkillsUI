import React, { useRef, useState, useEffect } from 'react';
import '../css/TrackInfoJavaSql.css';
import { useNavigate } from 'react-router';

const SpringBootWithAWS = () => {
    const reviewsRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const navigate = useNavigate();

    const sections = [
        {
            title: 'Building RESTful APIs with Spring Boot',
            description: 'Learn how to create scalable REST APIs using Spring Boot. Understand the key principles of REST architecture, perform CRUD operations, and handle common API tasks like pagination, sorting, and error handling with real-world examples.',
            image: './images/spring_rest_api.png',
        },
        {
            title: 'Complex Entity Relationships with JPA',
            description: 'Master entity relationships in Spring Data JPA. From one-to-one and one-to-many relationships to many-to-many mappings, explore how to efficiently manage database relations and implement best practices for handling complex entity designs.',
            image: './images/entity_relationships.png',
        },
        {
            title: 'Spring Security and JWT Authentication',
            description: 'Secure your applications with Spring Security. Implement authentication and authorization, and protect your REST APIs using JWT (JSON Web Tokens). Learn how to create role-based access control and method-level security for robust security management.',
            image: './images/spring_security_jwt.png',
        },
        {
            title: 'Microservices with Eureka and Spring Cloud Gateway',
            description: 'Discover the world of microservices architecture using Spring Boot. Learn how to implement Eureka for service discovery and Spring Cloud Gateway for intelligent routing and load balancing. This section teaches how to manage multiple services effectively, ensuring scalability and high availability.',
            image: './images/microservices_eureka_gateway.png',
        },
        
        {
            title: 'AWS EC2 and RDS-MySQL Integration',
            description: 'Learn how to set up and manage AWS EC2 instances and integrate them with RDS-MySQL for database management. This section covers everything from instance creation to connecting Spring Boot applications to AWS RDS databases.',
            image: './images/aws_ec2_rds.png',
        },
        {
            title: 'AWS SNS, SES, and SQS',
            description: 'Explore AWS messaging services like SNS (Simple Notification Service), SES (Simple Email Service), and SQS (Simple Queue Service). Understand how to integrate these services with your Spring Boot applications for messaging and notifications.',
            image: './images/aws_sns_ses_sqs.png',
        },
        {
            title: 'AWS S3 Bucket Integration',
            description: 'Learn how to upload and download documents and images using AWS S3. This section covers how to integrate S3 with your Spring Boot application, manage files efficiently, and implement secure file storage and retrieval solutions in the cloud.',
            image: './images/aws_s3.png',
        }
    ];
    
    
    const reviews = [
        { text: 'This course gave me a solid foundation in Java programming. I loved how the instructor explained the difficult concepts!', name: 'John Doe', company: 'Tech University' },
        { text: 'The best Java + SQL course I’ve ever taken! The projects were hands-on, and I feel confident in my programming skills now.', name: 'Jane Smith', company: 'Springboard College' },
        { text: 'I highly recommend this course to anyone looking to master both Java and database management.', name: 'Alex Johnson', company: 'Sun Tech' },
        { text: 'Excellent course with great insights into Java and SQL. I loved the hands-on approach.', name: 'Sarah Lee', company: 'DataWorks Inc.' },
        { text: 'Very practical course. The explanations were clear, and I feel much more confident in my coding abilities.', name: 'David Brown', company: 'IT Solutions' },
        { text: 'Hands-on projects helped me master key concepts quickly!', name: 'Michael Tan', company: 'Cloud9 Tech' },
        // Add more reviews as necessary
    ];

    const cardWidth = 320; // Approx width of a card (including margins)
    const cardsPerView = 3; // Display 3 cards per view

    useEffect(() => {
        checkArrows();
    }, [scrollPosition]);

    const handleScroll = (direction) => {
        const container = reviewsRef.current;
        const scrollAmount = cardWidth * cardsPerView;
        
        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            setScrollPosition(scrollPosition - scrollAmount);
        } else if (direction === 'right') {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setScrollPosition(scrollPosition + scrollAmount);
        }
    };

    const checkArrows = () => {
        const container = reviewsRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(container.scrollLeft < maxScrollLeft);
    };

    const scrollToReviews = () => {
        reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="trackinfo-page">
           {/* Header */}
<div className="trackinfo-header">
Java to Spring Boot and AWS
</div>

{/* Subheader */}
<div className="trackinfo-subheader">
  
Kickstart your journey into enterprise-level development with a hands-on project, progressing from core Java concepts to advanced AWS integrations. This course is ideal for developers looking to transition from Java to mastering Spring Boot and AWS.
 </div>
 <div className="trackinfo-subheader">
   
  We offer the course in three levels, with each level building on the previous to provide a seamless learning experience
 </div>
  
{/* Button Wrapper 
<div className="trackinfo-button-wrapper">
    <button className="trackinfo-enroll-button" onClick={() => navigate('/checkout')}>
        Enroll Now
    </button>
    <button className="trackinfo-reviews-button" onClick={scrollToReviews}>
        Reviews
    </button>
</div>
*/}

            {/* Course Sections */}
            {sections.map((section, index) => (
                <div className="trackinfo-section" key={index}>
                    <div className="trackinfo-image">
                        <img src={section.image} alt={section.title} />
                    </div>
                    <div className="trackinfo-content">
                        <div className="trackinfo-title">{section.title}</div>
                        <div className="trackinfo-description">{section.description}</div>
                         <ul>
                            {section.title === 'Core Java Programming' && (
                               <div className="key-highlights" style={{ marginTop: '20px' }}>
                               <h3>Key Highlights:</h3>
                               <ul>
                                 <li>
                                   <span>➤</span> Object-Oriented Programming: Learn how to structure
                                   your code using the power of objects and classes.
                                 </li>
                                 <li>
                                   <span>➤</span> Exception Handling: Master techniques to gracefully
                                   handle errors and ensure smooth program execution.
                                 </li>
                                 <li>
                                   <span>➤</span> Collections Framework: Explore Java’s built-in data
                                   structures for efficient and flexible data manipulation.
                                 </li>
                               </ul>
                             </div>
                            )}
                            {section.title === 'Fundamentals of SQL Queries and Database Design' && (
                                <div className="key-highlights" style={{ marginTop: '20px' }}>
                                <h3>Key Highlights:</h3>
                                <ul>
                                  <li>
                                    <span>➤</span> SQL Querying Basics: Learn how to retrieve, filter, 
                                    and manipulate data using essential SQL clauses like SELECT, WHERE, and ORDER BY
                                  </li>
                                  <li>
                                    <span>➤</span> Entity Relationship & Normalization: Understand how to structure efficient databases 
                                    through entity relationships, normalization techniques, and keys.
                                  </li>
                                  <li>
                                    <span>➤</span> Forward Engineering & DDL: Gain hands-on experience with MySQL Workbench 
                                    by generating DDL through forward engineering for real-world applications.
                                  </li>
                                </ul>
                              </div>
                            )}
                            {section.title === 'Advanced Java Programming: Streams, Multithreading, and Testing' && (
                                <div className="key-highlights" style={{ marginTop: '20px' }}>
                                <h3>Key Highlights:</h3>
                                <ul>
                                  <li>
                                    <span>➤</span> File Handling & Java Streams: Efficiently manage files and process data streams in real-time applications.
                                  </li>
                                  <li>
                                    <span>➤</span> Multithreading: Enhance your programs by managing concurrent tasks with multi-threading.
                                  </li>
                                  <li>
                                    <span>➤</span> JUnit Testing: Learn to write unit tests to ensure your Java code is reliable and bug-free.
                                  </li>
                                </ul>
                              </div>
                            )}
                            {section.title === 'SQL Mastery: Joins, Nested Queries, and Complex Relations' && (
                               <div className="key-highlights" style={{ marginTop: '20px' }}>
                               <h3>Key Highlights:</h3>
                               <ul>
                                 <li>
                                   <span>➤</span> Master Joins: Learn how to effectively combine data from multiple tables using inner, outer, and self-joins.
                                 </li>
                                 <li>
                                   <span>➤</span> Nested Queries: Understand and implement subqueries to handle complex data retrieval scenarios.
                                 </li>
                                 <li>
                                   <span>➤</span> Manual Mapping Techniques: Gain practical knowledge of mapping relationships manually for greater control over database queries.
                                 </li>
                               </ul>
                             </div>
                            )}

                        </ul>
                    </div>
                </div>
            ))}

            {/* Reviews Section */}
            <div className="trackinfo-reviews">
                <div className="trackinfo-review-title">What Our Students Say</div>
                
                {showLeftArrow && (
                    <button className="trackinfo-arrow trackinfo-arrow-left" onClick={() => handleScroll('left')}>
                        <svg viewBox="0 0 24 24"><path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6z" /></svg>
                    </button>
                )}

                <div className="trackinfo-review-scroller" ref={reviewsRef}>
                    <div className="trackinfo-review-scroller-inner">
                        {reviews.map((review, index) => (
                            <div className="trackinfo-review-card" key={index}>
                                <div className="trackinfo-review-text">"{review.text}"</div>
                                <div className="trackinfo-review-company">{review.company}</div>
                                <div className="trackinfo-review-name">- {review.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {showRightArrow && (
                    <button className="trackinfo-arrow trackinfo-arrow-right" onClick={() => handleScroll('right')}>
                        <svg viewBox="0 0 24 24"><path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SpringBootWithAWS;
