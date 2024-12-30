import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import courses from '../data/course_info_main';
import Modal from '../components/Modal';
import SimpleLogin from '../components/SimpleLogin';
import '../css/CourseCheckout.css';

const CourseCheckout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // Capture the current location

  const course = courses.find(c => c.courseId == id);
  const fee = course?.fee;
   const [isModalOpen, setModalOpen] = useState(false);

  // Scroll to the top of the page when this component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const proceedToPayment = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      // Redirect directly to payment if the user is logged in
      navigate(`/payment?courseId=${id}&fee=${fee}`);
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
              Course Name: {course?.title} <br />
              Level: {course?.level}
            </p>
            <p>
              Track: {course?.trackName}
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
            <p>{course ? `Rs.${fee}` : "Fee not available"}</p>
          </div>
        </div>
        <div className="total-fee">
          <strong>Total Fee: Rs.{fee}</strong>
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
