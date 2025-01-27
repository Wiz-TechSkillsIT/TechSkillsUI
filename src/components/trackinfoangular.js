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
const TrackInfoAngular = () => {
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
  const subject = 'Angular Mastery'; // Subject passed as prop

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
      title: 'Level 1: Foundation of Angular Development',
      description: 'Focus: Introducing core concepts of Angular and developing foundational skills for web development using this framework.',
      image: './images/level1_react.png',
      project: 'Project: Inventory Management System'
    },
    {
      title: 'Level 2: Advanced Angular Techniques and Application Building',
      description: 'Focus: Building more complex, dynamic applications with advanced features and integrations in Angular.',
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
      Angular Mastery: From Basics to Advanced Development
            </div>

      {/* Subheader */}
      <div className="trackinfo-subheader">
      Master Angular by building powerful, dynamic web applications,
       focusing on core concepts, hands-on coding, and practical implementation. 
       Starting with fundamentals and advancing to complex topics, 
       this program provides a thorough, structured approach to mastering Angular.      
      <div className="trackinfo-subheader">
        <br />
        We offer the course in<span className="highlight">  two levels</span>, with each level building on the previous to provide a seamless learning experience:
      </div>
      {/* Button Wrapper */}
      <div className="trackinfo-button-wrapper">
      <div class="button-group">
      <button className="trackinfo-enroll-button" onClick={() => navigate('/checkout/103')}>
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
              {section.title === 'Level 1: Foundation of Angular Development' && (
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                  <h3>Key Highlights:</h3>
                  <ul>
  <li>
    <span>➤</span> System Setup: Environment setup, installation of Angular CLI, and initializing Angular projects.
  </li>
  <li>
    <span>➤</span> Component Architecture: Introduction to components, modules, and services.
  </li>
  <li>
    <span>➤</span> Data Binding: Understanding one-way, two-way data binding, and event binding.
  </li>
  <li>
    <span>➤</span> Templates and Directives: Using built-in directives (*ngIf, *ngFor) and custom templates.
  </li>
  <li>
    <span>➤</span> Routing Basics: Setting up routing for single-page applications.
  </li>
  <li>
    <span>➤</span> Forms: Handling user input through reactive and template-driven forms.
  </li>
</ul>

                  <div >
                <span>
                       <h3> Level Outcome: </h3>  
                       <span className="  outcome">By completing Level 1, you will be able to create and structure basic Angular applications, implement data-binding, and manage user interactions. you’ll be equipped to build a small-scale project to reinforce these concepts.</span>
                    </span>
                    <span>
                    <br /><br />
                    <button className="trackinfo-started-button">Get Started</button>
  
                    </span>
                </div>
                </div>
                
                
              )}
              
              {section.title === 'Level 2: Advanced Angular Techniques and Application Building' && (
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                  <h3>Key Highlights:</h3>
                  <ul>
  <li>
    <span>➤</span> State Management: Introduction to RxJS for managing state and observables, and handling asynchronous data.
  </li>
  <li>
    <span>➤</span> Services and Dependency Injection: Creating and injecting services across components.
  </li>
  <li>
    <span>➤</span> Advanced Routing: Lazy loading, route guards, and nested routing for optimized navigation.
  </li>
  <li>
    <span>➤</span> HTTP Client Integration: Fetching data from APIs and handling CRUD operations.
  </li>
  <li>
    <span>➤</span> Component Libraries and Styling: Using libraries like Angular Material for UI components and SCSS for styling.
  </li>
  <li>
    <span>➤</span> PrimeNg: Use External Design Component Library like Primeng to create professional Components
  </li>
  <li>
    <span>➤</span> Testing in Angular: Setting up and running unit tests with Jasmine and Karma.
  </li>
</ul>

                  <div >
                <span>
                       <h3> Level Outcome: </h3>  
                       <span className="  outcome">
                       After Level 2, You will be able to build and maintain complex applications, implement efficient state management, interact with RESTful APIs, and utilize Angular testing tools. You will complete a project with full CRUD functionality, demonstrating a professional-grade application.



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
            <div className="trackinfo-description">By completing all levels of the AngularJs course, you will gain:</div>
 
            <ul>
                <div className="key-highlights" style={{ marginTop: '20px' }}>
                   
                <ul>
  <li>
    <span>➤</span> Comprehensive Angular Skills: Master Angular development from basics to advanced techniques, enabling you to create scalable and dynamic web applications.
  </li>
  <li>
    <span>➤</span> Practical Project Experience: Build real-world applications with features like component-based architecture, data-binding, and reactive forms.
  </li>
  <li>
    <span>➤</span> Expertise in Modern Tools and Techniques: Gain skills in RxJS for state management, Angular Material for UI, and unit testing with Jasmine and Karma.
  </li>
  <li>
    <span>➤</span> Career Readiness: Prepare for roles such as Angular Developer, Frontend Engineer, or Full-Stack Developer with solid Angular expertise.
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

export default TrackInfoAngular;
