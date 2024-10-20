import React, { useRef, useState, useEffect } from 'react';
import '../css/TrackInfoJavaSql.css';
import { useNavigate } from 'react-router';
import EnquireModal from './EnquireModal';
import FeeModal from './FeeModal';

const TrackInfoJavaSql = () => {
  const reviewsRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const navigate = useNavigate();
  const phoneNumber = '918806471579'; // Replace with your phone number
  const message = 'Welcome to TechSkillsIT! How can we assist you today?'; // Pre-typed message
  const [isModalOpen, setIsModalOpen] = useState(false);
  const subject = 'Course Enquiry: Java to Spring Boot'; // Subject passed as prop

  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);

  const openFeeModal = () => setIsFeeModalOpen(true);
  const closeFeeModal = () => setIsFeeModalOpen(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  const sections = [
    {
      title: 'Level 1 : Console based App with Java Programming',
      description: 'Focus: Java fundamentals, Object-Oriented Programming, Exception Handling, File Handling and JDBC.',
      image: './images/java_exception.png',
      project: 'Project: Student Management System (console-based)'
    },
    {
      title: 'Level 2: Spring Boot REST API Development',
      description: 'Focus: Transition to web development with popular Spring Boot Framework.',
      image: './images/level2_java.png',
      project: 'Project Continuation: Student Management System with a RESTful API'
    },
    {
      title: 'Level 3: Advanced Spring Boot & AWS with Microservices',
      description: 'Focus: Advanced backend development with AWS Services integrations.',
      image: './images/level3_java.png',
      project: 'Project Evolution: Scale SMS Project to a microservice architecture.'

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
      <div className="trackinfo-header ">
        Java Programming to Spring Boot and AWS 
      </div>

      {/* Subheader */}
      <div className="trackinfo-subheader">
        Kickstart your journey into <span className="highlight"> enterprise-level development with hands-on project</span>, progressing from core Java concepts to advanced AWS integrations. This course is ideal for developers looking to transition from Java to mastering Spring Boot and AWS.
      </div>
      {/* Track Fee */}
      <div className="trackinfo-subheader">
        We offer the course in<span className="highlight">  three levels</span>, with each level building on the previous to provide a seamless learning experience:
      </div>
      {/* Button Wrapper */}
      <div className="trackinfo-button-wrapper">
        <button className="trackinfo-enroll-button" onClick={() => navigate('/checkout')}>
          Start Level 1 for free 
        </button>
        <button className="trackinfo-outcome-button" onClick={scrollToReviews}>
          Outcome
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
            <div className="trackinfo-description">{section.project}</div>

            <ul>
              {section.title === 'Level 1 : Console based App with Java Programming' && (
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
                    <li>
                      <span>➤</span> File I/O: Save and fetch data from flat files to perform batch processing.
                    </li>
                     
                    
                  </ul>
                  <div >
                <span>
                       <h3> Level Outcome: </h3>  
                       <span className="  outcome">By completing Level 1, you will gain a solid understanding of Java fundamentals, Object-Oriented Programming, and file handling while building a console-based Student Management System.</span>
                    </span>
                    <span>
                    <br /><br />
                    <button className="trackinfo-started-button">Get Started</button>
  
                    </span>
                </div>
                </div>
                
                
              )}
              
              {section.title === 'Level 2: Spring Boot REST API Development' && (
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                  <h3>Key Highlights:</h3>
                  <ul>
                    <li>
                      <span>➤</span> REST API Development: Build powerful RESTful APIs using Spring Boot to expose data and interact with external systems.
                    </li>
                    <li>
                      <span>➤</span> DB Operations with JPA/Hibernate: Perform Create, Read, Update, and Delete operations on a database using Spring Data JPA.
                    </li>
                    <li>
                      <span>➤</span> Entity Relationships: Understand and implement complex entity relationships such as OneToOne, OneToMany, ManyToOne, and ManyToMany.
                    </li>
                    <li>
                      <span>➤</span> Role-Based Authentication: Secure your application by implementing role-based access control using Spring Security.
                    </li>
                     
                    <li>
                      <span>➤</span> Exception Handling: Handle API errors gracefully and return meaningful responses to the client.
                    </li>
                    <li>
                      
                    </li>
                  </ul>
                  <div >
                <span>
                       <h3> Level Outcome: </h3>  
                       <span className="  outcome">After Level 2, you will be able to build secure, data-driven RESTful APIs with Spring Boot, manage databases using JPA, and implement role-based authentication.</span>
                    </span>
                    <span>
                    <br /><br />
                    <button onClick={openWhatsApp} style={{ padding: '10px 20px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Enquire on WhatsApp 
                      </button>
                      &nbsp;&nbsp;
                      <button onClick={openModal} style={{ padding: '10px 20px', backgroundColor: '#63bdd6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Enquire on Email
                      </button>
                      {/* Modal Component */}
                      <EnquireModal isOpen={isModalOpen} onClose={closeModal} subject={subject} />
 
                      &nbsp;&nbsp;
                      <button onClick={openFeeModal} style={{ padding: '10px 20px', backgroundColor: '#b4336f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Fee Info
                      </button>
                    </span>
                    {/* Fee Modal Component */}
      <FeeModal isOpen={isFeeModalOpen} onClose={closeFeeModal} />
                </div>
                </div>
              )}
              {section.title === 'Level 3: Advanced Spring Boot & AWS with Microservices' && (
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                  <h3>Key Highlights:</h3>
                  <ul>
                    <li>
                      <span>➤</span>  JWT-based Security: Secure your services with stateless authentication using JSON Web Tokens.
                    </li>
                    <li>
                      <span>➤</span> AWS Services (SES, RDS, EC2, S3): Integrate AWS services for email, cloud databases, server hosting, and file storage.
                    </li>
                    <li>
                      <span>➤</span> Microservices: Implement Spring Cloud Gateway for routing and Eureka Service Discovery for managing microservices.
                    </li>
                    <li>
                      <span>➤</span> AWS SQS/Active MQ: Set up asynchronous communication between services using AWS Simple Queue Service.
                    </li>
                    <li>
                      <span>➤</span> AWS NoSql Dynamo DB: Integrate a fully managed NoSQL database for high-performance and scalable data storage.
                    </li>
                    <li>
                      <span>➤</span> Monitoring & Logging: Implement monitoring and logging with AWS CloudWatch or ELK Stack to track performance and debug issues.
                    </li>
                     
                  </ul>

                  <div >
                <span>
                       <h3> Level Outcome: </h3>  
                       <span className="  outcome">By completing Level 3, you will master microservices architecture, secure APIs with JWT, and integrate AWS services like DynamoDB, SQS, SES, RDS and S3.</span>
                    </span>
                    <span>
                    <br /><br />
                    <button onClick={openWhatsApp} style={{ padding: '10px 20px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Enquire on WhatsApp 
                      </button>
                      &nbsp;&nbsp;
                      <button onClick={openWhatsApp} style={{ padding: '10px 20px', backgroundColor: '#63bdd6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Enquire on Email
                      </button>
                      &nbsp;&nbsp;
                      <button onClick={openWhatsApp} style={{ padding: '10px 20px', backgroundColor: '#b4336f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Fee Info
                      </button>
                    </span>
                </div>
                </div>
              )}
          </ul>
          </div>
        </div>
      ))}

<div className="trackinfo-outcome">
           
          <div className="trackinfo-content">
            <div className="trackinfo-title">Course Outcome</div>
            <div className="trackinfo-description">By completing all three levels of the Java to Spring Boot and AWS course, learners will gain:</div>
 
            <ul>
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                   
                  <ul>
                    <li>
                      <span>➤</span>  Industry-Ready Skills: Master core Java, Spring Boot, and AWS services, positioning you for backend development roles in modern enterprise environments.
                    </li>
                    <li>
                      <span>➤</span> Real-World Project Experience: Build and scale a fully functional Student Management System, from console-based applications to microservices in the cloud.
                    </li>
                    <li>
                      <span>➤</span> Expertise in Microservices and Cloud Technologies: Learn how to develop, deploy, and monitor microservices with Docker, AWS SQS, DynamoDB, and AWS CloudWatch.
                    </li>
                    <li>
                      <span>➤</span> Full-Stack API Knowledge: Develop secure REST APIs with JWT-based authentication and perform advanced database operations using JPA/Hibernate.
                    </li>
                    <li>
                      <span>➤</span> Career Prospects: Be prepared for roles such as Java Developer, Spring Boot Developer, AWS Cloud Engineer, or Backend Developer.
                    </li>
                     
                     
                  </ul>
                  <span>
                  Upon completion,<span className='highlight'> you'll have the skills and confidence to apply for high-demand jobs in the field of backend development and cloud computing.
                  </span>

                  </span>
                </div>
              
          </ul>
          </div>
        </div>
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

export default TrackInfoJavaSql;
