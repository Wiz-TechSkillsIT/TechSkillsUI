import React, { useRef, useState, useEffect } from 'react';
import '../css/TrackInfoJavaSql.css';
import { useNavigate } from 'react-router';

const MernStack = () => {
    const reviewsRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const navigate = useNavigate();

    const sections = [
      {
        title: 'React Fundamentals',
        description: 'Learn the core concepts of React, including component-based architecture, JSX, and state management. This section covers building dynamic user interfaces and sets the foundation for advanced React development.',
        image: './images/react_fundamentals.png',
    },
    {
        title: 'Professional React Techniques',
        description: 'Master professional techniques in React such as component communication with props and state, handling API calls, and managing multi-page applications using React Router. This section enhances your skills for building robust frontend applications.',
        image: './images/react_professional_techniques.png',
    },
    {
        title: 'Redux for State Management',
        description: 'Learn Redux to manage the global state of your application. This section covers implementing Redux, using the Redux Toolkit, and best practices for state management across large-scale applications.',
        image: './images/redux_state_management.png',
    },
    {
        title: 'Building APIs with Node.js and Express',
        description: 'Develop robust APIs using Node.js and Express to interact with your React frontend. This section guides you through setting up an Express server, creating RESTful APIs, and managing routes efficiently.',
        image: './images/nodejs_express_api.png',
    },
    {
        title: 'MongoDB Database Integration',
        description: 'Understand how to use MongoDB, a NoSQL database, to store and manage data for your full-stack application. Learn how to perform CRUD operations with MongoDB and integrate it seamlessly with your Node.js backend using Mongoose.',
        image: './images/mongodb_integration.png',
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
    Java + SQL Mastery: From Core Programming to Advanced Data Management
</div>

{/* Subheader */}
<div className="trackinfo-subheader">
    Comprehensive course to master Java programming and SQL database management.
    
</div>
 {/* Track Fee */}
 <div className="trackinfo-subheader">
                Track Fee: <span style={{ color: '#27ae60' }}>INR. 1750</span>
            </div>
{/* Button Wrapper */}
<div className="trackinfo-button-wrapper">
    <button className="trackinfo-enroll-button" onClick={() => navigate('/checkout')}>
        Enroll Now
    </button>
    <button className="trackinfo-reviews-button" onClick={scrollToReviews}>
        Reviews
    </button>
</div>


           
 

           

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

export default MernStack;
