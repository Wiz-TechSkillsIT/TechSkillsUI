import React from 'react';
import '../css/CourseCheckout.css';

const CourseCheckout = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2>Course Checkout</h2>
        <div className="course-details">
          <div className="course-info">
            <strong>Track / Course Name</strong>
            <p className="course-title">
              Java + SQL Mastery: From Core Programming to Advanced Data Management
            </p>
            <p className="fee-inclusive">Fee Inclusive of all Taxes</p>
            <p className="course-access">
              Access to all course materials are valid up to 3 years from the date of Purchase
            </p>
          </div>
          <div className="course-amount">
            <strong>Amount in INR</strong>
            <p>1,700</p>
          </div>
        </div>
        <div className="total-fee">
          <strong>Total Fee: </strong>1700
        </div>
        <button className="proceed-button">PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default CourseCheckout;
