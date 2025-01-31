import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import courses from '../data/course_info_main';
import Modal from '../components/Modal';
import SimpleLogin from '../components/SimpleLogin';
import '../css/CourseCheckout.css';
import { toast } from "react-toastify";

const CourseCheckout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
 
  const course = courses.find(c => c.courseId == id);
  const fee = course?.fee;
   const [isModalOpen, setModalOpen] = useState(false);

  // Scroll to the top of the page when this component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);

     const loadRazorpay = async () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadRazorpay();

  }, []);


  const handlePayment = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let courseId = id; // Change dynamically
    let token = localStorage.getItem("token"); // ✅ Retrieve Token from LocalStorage

    if (!token) {
      toast.error("Authentication error! Please log in again.");
      return;
    }

    const orderResponse = await fetch("http://localhost:5005/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 5000, currency: "INR" }) // Amount in INR
    });
  
    const orderData = await orderResponse.json();
    if (!orderData.success) {
      toast.error("Error creating order. Please try again.");
      return;
    }
  
    const options = {
      key: "rzp_live_IbyihyoJgzMpuq",
      amount: 5000 * 100,
      currency: "INR",
      name: "TechSkillsIT",
      description: "Course Payment",
      image: "https://your-logo-url.com/logo.png",
      order_id: orderData.order_id,
      handler: async function (response) {
        console.log("Payment successful:", response);
  
        // 🔹 Verify Payment and Enroll User
        const verifyResponse = await fetch("http://localhost:5005/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            userEmail: user.email,
            courseId: id,
            token: token // ✅ Pass Token to Backend
          })
        });
  
        const result = await verifyResponse.json();
        if (result.success) {
          toast.success("✅ Payment successful! You are enrolled!");
          setTimeout(() => navigate("/user-dashboard"), 3000);
        } else {
          toast.error("Payment verified, but enrollment failed. Contact support.");
        }
      },
      prefill: {
        name: user.fname,
        email: user.email,
        contact: "9999999999"
      },
      theme: { color: "#3399cc" }
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  
  
  
  
  

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
        
        <button onClick={handlePayment} className="proceed-button">PROCEED TO PAYMENT</button>

        {/* Modal for Login */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="modal-header">Please Login to Continue to Payment</div>
          {/* Pass location and closeModal to SimpleLogin */}
          {/* <SimpleLogin locationState={location} closeModal={closeModal} /> */}
        </Modal>
      </div>
    </div>
  );
};

export default CourseCheckout;




