import React, { useState } from 'react';
import SignupForm from './SignupForm';
import OTPForm from './OTPForm';

const SignupPage = () => {
    const [showOTP, setShowOTP] = useState(false);

    return (
        <div>
            {!showOTP ? (
                <SignupForm setShowOTP={setShowOTP} />
            ) : (
                <OTPForm />
            )}
        </div>
    );
};

export default SignupPage;
