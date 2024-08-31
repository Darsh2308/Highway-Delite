import React from 'react';
import { auth } from '../config/firebase.config'; // Import auth for user data
import './HomePage.css'; // Import the CSS file
import logo from '../assets/logo.jpg'; // Import the logo image
import contactImage from '../assets/contact.png'; // Import the contact image

const HomePage = () => {
  const user = auth.currentUser; // Get the currently logged-in user

  const navigateToResetPassword = () => {
    window.location.href = '/reset-password'; // Path to the reset password page
  };

  return (
    <div className="homepage">
      <img src={logo} alt="Logo" className="logo" />
      <button className="reset-password-btn" onClick={navigateToResetPassword}>Reset Password</button>
      <div className="text-container">
        <h1 className="welcome-line">Welcome to the <span className="highlight">Highway Delite!</span></h1>
        <p className="scroll-message">Scroll down for Customer Information</p>
        <p className="loading-message">
          {user ? `Email: ${user.email}` : 'Loading user information...'}
        </p>
      </div>
      <div className="customer-info-grid">
        {/* Example customer information items */}
        <div className="grid-item">
          <div className="photo-circle">
            <img src={contactImage} alt="Customer" />
          </div>
          <div className="info">
            <p><strong>Alex Reynolds</strong></p>
            <p>Email: alex.reynolds@example.com</p>
            <p>Location: New York, NY</p>
            <p>Interests: Technology, Hiking</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="photo-circle">
            <img src={contactImage} alt="Customer" />
          </div>
          <div className="info">
            <p><strong>Jordan Lee</strong></p>
            <p>Email: jordan.lee@example.com</p>
            <p>Location: San Francisco, CA</p>
            <p>Interests: Photography, Traveling</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="photo-circle">
            <img src={contactImage} alt="Customer" />
          </div>
          <div className="info">
            <p><strong>Taylor Morgan</strong></p>
            <p>Email: taylor.morgan@example.com</p>
            <p>Location: Austin, TX</p>
            <p>Interests: Music, Cooking</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="photo-circle">
            <img src={contactImage} alt="Customer" />
          </div>
          <div className="info">
            <p><strong>Casey Blake</strong></p>
            <p>Email: casey.blake@example.com</p>
            <p>Location: Seattle, WA</p>
            <p>Interests: Reading, Gardening</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="photo-circle">
            <img src={contactImage} alt="Customer" />
          </div>
          <div className="info">
            <p><strong>Morgan Avery</strong></p>
            <p>Email: morgan.avery@example.com</p>
            <p>Location: Chicago, IL</p>
            <p>Interests: Fitness, Yoga</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="photo-circle">
            <img src={contactImage} alt="Customer" />
          </div>
          <div className="info">
            <p><strong>Riley Brooks</strong></p>
            <p>Email: riley.brooks@example.com</p>
            <p>Location: Miami, FL</p>
            <p>Interests: Art, Surfing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
