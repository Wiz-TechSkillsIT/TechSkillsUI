import React, { useRef, useState, useEffect } from 'react';
import '../css/TrackInfoJavaSql.css';
import { useNavigate } from 'react-router';
import EnquireModal from './EnquireModal';
import FeeModalNode from './FeeModalNode';
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show only one review card at a time (good for mobile)
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // 3-second interval
};
const TrackInfoNode = () => {
  const reviewsRef = useRef(null);
  const outcomeRef = useRef(null); // Ref for the outcome section

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const navigate = useNavigate();
  const phoneNumber = '918806471579'; // Replace with your phone number
  const message = 'Welcome to TechSkillsIT! How can we assist you today?'; // Pre-typed message
  const [isModalOpen, setIsModalOpen] = useState(false);
  const subject = 'Node.js Programming with Microservices'; // Subject passed as prop

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
      title: 'Level 1: Node Fundamentals with CRUD APIs',
      description: 'Focus: Node fundamentals, Setting up Express and Mongo, CRUD APIs with Mongoose, Essential Validations.',
      image: './images/node_level1.png',
      project: 'Project: Employee Management System'
    },
    {
      title: 'Level 2: Professional Node.js API Development',
      description: 'Focus: Working wih Files and Images, DB Relationships, JWT, Access Control.',
      image: './images/level2_java.png',
      project: 'Project Continuation: Employee Management System with a RESTful API'
    },
    {
      title: 'Level 3: Advanced Node.js Developments with Microservices',
      description: 'Focus: API Performance, Microservices, Adv Security, Cloud Integration.',
      image: './images/level3_java.png',
      project: 'Project Evolution: Scale EMS Project to a microservice architecture.'

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

  const scrollToOutcome = () => {
    outcomeRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="trackinfo-page">
      {/* Header */}
      <div className="trackinfo-header ">
        Node.js Programming with Microservices
      </div>

      {/* Subheader */}
      <div className="trackinfo-subheader">
      Master Node.js from fundamentals to advanced concepts in this comprehensive course. Start with building basic CRUD APIs and move on to professional-level development with features like file uploads, database relationships, and JWT security. Finally, dive into advanced topics such as microservices, real-time communication, and cloud deployment using AWS. This course equips you with the skills needed to build scalable, secure, and high-performance applications.      </div>
      {/* Track Fee */}
      <div className="trackinfo-subheader">
        We offer the course in<span className="highlight">  three levels</span>, with each level building on the previous to provide a seamless learning experience:
      </div>
      {/* Button Wrapper */}
      <div className="trackinfo-button-wrapper">
      <div class="button-group">
        <button className="trackinfo-enroll-button" onClick={() => navigate('/checkout')}>
          Start Level 1 for free 
        </button>
        <button className="trackinfo-outcome-button" onClick={scrollToOutcome}>
          Outcome
        </button>
        <button className="trackinfo-reviews-button" onClick={scrollToReviews}>
          Reviews
        </button>
        </div>
      </div>
  {/* Course Sections */}
      {sections.map((section, index) => (
        <div className="trackinfo-section" key={index}>
          <div className="trackinfo-image">
            <img src={section.image} alt={section.title} style={{height: '70%',weight: '70%' }}/>
          </div>
          <div className="trackinfo-content">
            <div className="trackinfo-title">{section.title}</div>
            <div className="trackinfo-description">{section.description}</div>
            <div className="trackinfo-description">{section.project}</div>

            <ul>
              {section.title === 'Level 1: Node Fundamentals with CRUD APIs' && (
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                  <h3>Key Highlights:</h3>
                  <ul>
                    <li>
                      <span>➤</span> Initialize a Node.js project and set up Express Server.
                    </li>
                    <li>
                      <span>➤</span> Connect to MongoDB and establish a database connection.
                    </li>
                    <li>
                      <span>➤</span> Build APIs using CRUD operations (POST, GET, PUT, DELETE, PATCH).
                    </li>
                    <li>
                      <span>➤</span> Validate data with schemas and implement basic error handling.
                    </li>
                     
                    
                  </ul>
                  <div >
                <span>
                       <h3> Level Outcome: </h3>  
                       <span className="  outcome">By completing Level 1, you will gain a solid understanding of Node fundamentals with ability to create CRUD APIs.</span>
                    </span>
                    <span>
                    <br /><br />
                    <button className="trackinfo-started-button">Get Started</button>
  
                    </span>
                </div>
                </div>
                
                
              )}
              
              {section.title === 'Level 2: Professional Node.js API Development' && (
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                  <h3>Key Highlights:</h3>
                  <ul>
                    <li>
                      <span>➤</span> Master File and Image Uploads: Learn how to handle file and image uploads seamlessly in your Node.js APIs.

                    </li>
                    <li>
                      <span>➤</span> Efficient Data Management: Implement pagination, sorting, searching, and filtering for optimized API responses.

                    </li>
                    <li>
                      <span>➤</span> JWT Security: Secure your APIs with JWT-based authentication and implement authorization for different user roles.


                    </li>
                     
                     
                    <li>
                      <span>➤</span> Role-Based Access Control: Learn how to restrict API access based on user roles, ensuring enhanced security in your applications.

                    </li>
                    <li>
                      
                    </li>
                  </ul>
                  <div >
                <span>
                       <h3> Level Outcome: </h3>  
                       <span className="  outcome">
                       After Level 2, you will be able to build secure, data-driven RESTful APIs with Node.js, manage complex database relationships using MongoDB, and implement role-based authentication with JWT.

                       </span>
                    </span>
                  
                    <div class="button-group"> 

<button  className="trackinfo-whatsapp-button" onClick={openWhatsApp}  >
    Enquire on WhatsApp 
  </button>
   
  <button className="trackinfo-email-button" onClick={openModal}  >
    Enquire on Email
  </button>
  {/* Modal Component */}
  <EnquireModal isOpen={isModalOpen} onClose={closeModal} subject={subject} />
 
  <button className="trackinfo-fee-button" onClick={openFeeModal}  >
    Fee Info
  </button>
</div>
                    {/* Fee Modal Component */}
      <FeeModalNode isOpen={isFeeModalOpen} onClose={closeFeeModal} />
                </div>
                </div>
              )}
              {section.title === 'Level 3: Advanced Node.js Developments with Microservices' && (
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                  <h3>Key Highlights:</h3>
                  <ul>
                    <li>
                      <span>➤</span>  Optimize API Performance: Learn advanced techniques like middleware optimization, caching with Redis, and rate limiting to enhance your application's performance.
                    </li>
                    <li>
                      <span>➤</span> Implement Microservices Architecture: Build scalable microservices using RabbitMQ or Kafka for message queues, and handle service discovery and load balancing.
                    </li>
                    <li>
                      <span>➤</span> Real-time Communication: Master WebSockets to build real-time applications, enabling live updates and seamless data flow between client and server.
                    </li>
                    <li>
                      <span>➤</span> Advanced Security: Secure your APIs with OAuth2, two-factor authentication (2FA), and data encryption, while preventing common vulnerabilities like XSS and SQL Injection.
                    </li>
                    <li>
                      <span>➤</span> Cloud Integration and DevOps: Deploy and manage Node.js applications on AWS, GCP, or Azure, and automate deployments with CI/CD pipelines using Jenkins or GitLab.
                    </li>
                    </ul>

                  <div >
                <span>
                       <h3> Level Outcome: </h3>  
                       <span className="outcome">After Level 3, you will be able to optimize and scale Node.js applications using microservices, caching, and Docker. You will also master advanced security techniques, real-time communication, and deploy your applications to the cloud with CI/CD pipelines.</span>
                    </span>
                    <div class="button-group"> 

<button  className="trackinfo-whatsapp-button" onClick={openWhatsApp}  >
    Enquire on WhatsApp 
  </button>
   
  <button className="trackinfo-email-button" onClick={openModal}  >
    Enquire on Email
  </button>
  {/* Modal Component */}
  <EnquireModal isOpen={isModalOpen} onClose={closeModal} subject={subject} />
 
  <button className="trackinfo-fee-button" onClick={openFeeModal}  >
    Fee Info
  </button>
</div>
                </div>
                </div>
              )}
          </ul>
          </div>
        </div>
      ))}

<div className="trackinfo-outcome" ref={outcomeRef}>
           
          <div className="trackinfo-content">
            <div className="trackinfo-title">Course Outcome</div>
            <div className="trackinfo-description">By completing all three levels of the Java to Spring Boot and AWS course, learners will gain:</div>
 
            <ul>
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                   
                <ul>
  <li>
    <span>➤</span> Industry-Ready Skills: Master Node.js and MongoDB, equipping you with the knowledge to build secure, scalable backend applications for modern web and enterprise environments.
  </li>
  <li>
    <span>➤</span> Real-World Project Experience: Gain hands-on experience by developing RESTful APIs with advanced features like file uploads, pagination, and complex database relationships.
  </li>
  <li>
    <span>➤</span> Expertise in Microservices and Cloud Technologies: Learn to build, deploy, and scale microservices using Docker, AWS, RabbitMQ, and Kubernetes.
  </li>
  <li>
    <span>➤</span> Full-Stack API Development: Implement secure, data-driven APIs with JWT authentication, role-based access control, and performance optimizations like caching and rate limiting.
  </li>
  <li>
    <span>➤</span> Career Prospects: Be prepared for roles such as Node.js Developer, Backend Developer, API Engineer, or Cloud Developer.
  </li>
</ul>
</div>
</ul>
    </div>
        </div>
      {/* Reviews Section */}
      <div className="trackinfo-reviews" ref={reviewsRef}>
      <div className="trackinfo-review-title">What Our Students Say</div>
      <div className="trackinfo-review-scroller">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div className="trackinfo-review-card" key={index}>
              <div className="trackinfo-review-text">"{review.text}"</div>
              <div className="trackinfo-review-company">{review.company}</div>
              <div className="trackinfo-review-name">- {review.name}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default TrackInfoNode;
