import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import courseData from '../data/course_data';
import Modal from '../components/Modal';
import SimpleLogin from '../components/SimpleLogin';
import '../css/CourseCheckout.css';

const CourseCheckout = () => {
  const { id, level } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // Capture the current location

  const course = courseData.find(c => c._id === id);
  const levelNumber = parseInt(level.replace("level", ""), 10);
  const levelData = course?.levels.find(l => l.level === levelNumber);

  const [isModalOpen, setModalOpen] = useState(false);

  // Scroll to the top of the page when this component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const proceedToPayment = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      // Redirect directly to payment if the user is logged in
      navigate(`/payment?courseId=${id}&level=${levelNumber}&fee=${levelData.price}`);
    } else {
      // Open login modal with the current location in state
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2 style={{ textAlign: 'center' }}>Course Checkout</h2>
        <div className="course-details">
          <div className="course-info">
            <p className="course-title">
              {course?.title} <br />
              {levelData?.title}
            </p>
            <p className="fee-inclusive">Fee Inclusive of all Taxes</p>
            <p className="course-access">
              Access to all course materials is valid up to 3 years from the date of purchase.
            </p>
            <p className="course-access">
              Upon enrollment, you will receive a welcome email with course schedule and material access details.
            </p>
          </div>
          <div className="course-amount">
            <strong>Amount in INR</strong>
            <p>{levelData ? `Rs.${levelData.price}` : "Fee not available"}</p>
          </div>
        </div>
        <div className="total-fee">
          <strong>Total Fee: Rs.{levelData?.price}</strong>
        </div>
        
        <button onClick={proceedToPayment} className="proceed-button">PROCEED TO PAYMENT</button>

        {/* Modal for Login */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="modal-header">Please Login to Continue to Payment</div>
          {/* Pass location and closeModal to SimpleLogin */}
          <SimpleLogin locationState={location} closeModal={closeModal} />
        </Modal>
      </div>
    </div>
  );
};

export default CourseCheckout;
