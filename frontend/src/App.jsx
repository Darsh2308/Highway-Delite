import React, { useState } from 'react';
import SignupForm from './components/SignupForm'; // Ensure correct import path
import LoginPage from './components/LoginPage'; // Ensure correct import path
import HomePage from './components/HomePage'; // Ensure correct import path
import ResetPasswordPage from './components/ResetPasswordPage'; // Ensure correct import path
import './App.css';

function App() {
  const [showSignup, setShowSignup] = useState(true); // State to toggle between signup and login

  // Check the current path and render the corresponding component
  const currentPath = window.location.pathname;

  return (
    <div className="App">
      {currentPath === '/home' ? (
        <HomePage />
      ) : currentPath === '/reset-password' ? (
        <ResetPasswordPage />
      ) : showSignup ? (
        <SignupForm setShowSignup={setShowSignup} />
      ) : (
        <LoginPage setShowSignup={setShowSignup} />
      )}
    </div>
  );
}

export default App;
