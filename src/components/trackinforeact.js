import React, { useRef, useState, useEffect } from 'react';
import '../css/TrackInfoJavaSql.css';
import { useNavigate } from 'react-router';
import EnquireModal from './EnquireModal';
 import Slider from "react-slick";
import FeeModalReact from './FeeModalReact';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show only one review card at a time (good for mobile)
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // 3-second interval
};
const TrackInfoReact = () => {
  window.scroll(0,0);
  const reviewsRef = useRef(null);
  const outcomeRef = useRef(null); // Ref for the outcome section

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const navigate = useNavigate();
  const phoneNumber = '918806471579'; // Replace with your phone number
  const message = 'Welcome to TechSkillsIT! How can we assist you today?'; // Pre-typed message
  const [isModalOpen, setIsModalOpen] = useState(false);
  const subject = 'React.js Mastery'; // Subject passed as prop

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
      title: 'Level 1: React Essentials: Building the Foundation',
      description: 'Focus: React basics, Components and State Management, Event Handling, Working with Forms, and Basic Data Manipulation.',
      image: './images/level1_react.png',
      project: 'Project: Employee Management System'
    },
    {
      title: 'Level 2: Advanced React Development: Real-World Applications',
      description: 'Focus: API integration, Advanced State Management with Redux, Component Libraries with PrimeReact, Data Visualization with Chart.js, Testing, and Deployment.',
      image: './images/level2_react.png',
      project: 'Project Continuation: Employee Management System'
    },
     
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
      React.js Mastery: Practical Skills from Basics to Professional Development
      </div>

      {/* Subheader */}
      <div className="trackinfo-subheader">
      Master React.js from the ground up in this all-encompassing course. Begin by learning core concepts like components, state, and events, and progress to building dynamic applications with API integration, form handling, and Redux state management. Finally, explore advanced techniques, including performance optimization, testing with Jest, and continuous deployment. This course provides the expertise needed to develop responsive, efficient, and production-ready applications.      {/* Track Fee */}
      
      <div className="trackinfo-subheader">
        <br />
        We offer the course in<span className="highlight">  two levels</span>, with each level building on the previous to provide a seamless learning experience:
      </div>
      {/* Button Wrapper */}
      <div className="trackinfo-button-wrapper">
      <div class="button-group">
      <button className="trackinfo-enroll-button" onClick={() => navigate('/checkout/102')}>
          Start Level 1
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
            <img src={section.image} alt={section.title} />
          </div>
          <div className="trackinfo-content">
            <div className="trackinfo-title">{section.title}</div>
            <div className="trackinfo-description">{section.description}</div>
            <div className="trackinfo-description">{section.project}</div>

            <ul>
              {section.title === 'Level 1: React Essentials: Building the Foundation' && (
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                  <h3>Key Highlights:</h3>
                  <ul>
  <li>
    <span>➤</span> Set up your development environment and create your first React project.
  </li>
  <li>
    <span>➤</span> Understand the basics of components and how to render information in the app.
  </li>
  <li>
    <span>➤</span> Work with variables, state, and learn the power of dynamic data in React.
  </li>
  <li>
    <span>➤</span> Build interactive UIs using events like onClick and onChange.
  </li>
  <li>
    <span>➤</span> Manage user inputs through forms and filter displayed data.
  </li>
</ul>

                  <div >
                <span>
                       <h3> Level Outcome: </h3>  
                       <span className="  outcome">By completing Level 1, you will gain a Gain a solid foundation in React by building interactive applications with components, state, and events. Develop the skills to create and manage forms, handle user input, and display dynamic data.</span>
                    </span>
                    <span>
                    <br /><br />
                    <button className="trackinfo-started-button">Get Started</button>
  
                    </span>
                </div>
                </div>
                
                
              )}
              
              {section.title === 'Level 2: Advanced React Development: Real-World Applications' && (
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                  <h3>Key Highlights:</h3>
                  <ul>
  <li>
    <span>➤</span> Integrate styling into your project using Bootstrap/PrimeReact for a polished UI.
  </li>
  <li>
    <span>➤</span> Fetch and display data by calling APIs with both Fetch and Axios.
  </li>
  <li>
    <span>➤</span> Utilize React lifecycle hooks to manage component behavior effectively.
  </li>
  <li>
    <span>➤</span> Pass data between components with props and lift state for component communication.
  </li>
  <li>
    <span>➤</span> Master Redux for efficient state management and handle CRUD operations.
  </li>
  <li>
    <span>➤</span> Optimize performance with code splitting and lazy loading.
  </li>
  <li>
    <span>➤</span> Test React components using Jest and ensure quality with CI/CD deployment.
  </li>
</ul>

                  <div >
                <span>
                       <h3> Level Outcome: </h3>  
                       <span className="  outcome">
                       After Level 2, you would gain Advance to professional-level React development skills with hands-on experience in API integration, state management using Redux, and performance optimization. Be equipped to build complex applications with modern testing and deployment practices.

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
      <FeeModalReact isOpen={isFeeModalOpen} onClose={closeFeeModal} />
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
            <div className="trackinfo-description">By completing all levels of the ReactJs Mastery course, you will gain:</div>
 
            <ul>
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                   
                <ul>
  <li>
    <span>➤</span> Comprehensive React Skills: Master React development from fundamentals to advanced topics, preparing you for complex, scalable applications.
  </li>
  <li>
    <span>➤</span> Practical Project Experience: Build real-world applications with features like form handling, data filtering, and robust state management using Redux.
  </li>
  <li>
    <span>➤</span> Expertise in Modern Tools and Techniques: Learn performance optimization with code splitting, testing with Jest, and seamless deployment through CI/CD practices.
  </li>
  <li>
    <span>➤</span> Career Readiness: Equip yourself for roles such as React Developer, Frontend Engineer, or Full-Stack Developer.
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
    </div>
  );
};

export default TrackInfoReact;
