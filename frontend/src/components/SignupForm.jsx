import React, { useState } from 'react';
import { auth } from '../config/firebase.config'; // Ensure correct import path
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import './SignupPage.css'; // Import the new CSS file

const SignupForm = ({ setShowSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Send email verification
            await sendEmailVerification(user);

            // Inform user
            alert('Verification email sent! Please check your inbox.');
            setShowSignup(false); // Navigate to login page or show a success message
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('This email address is already in use. Please use a different email.');
            } else if (error.code === 'auth/invalid-email') {
                setError('The email address is not valid. Please enter a valid email.');
            } else if (error.code === 'auth/weak-password') {
                setError('The password is too weak. Please enter a stronger password.');
            } else {
                setError('An error occurred. Please try again.');
            }
            console.error("Error signing up:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-page">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Signing up...' : 'Signup'}
                </button>
                {error && <p className="error">{error}</p>}
            </form>
            <p>
                Already have an account?{' '}
                <button onClick={() => setShowSignup(false)}>Login</button>
            </p>
        </div>
    );
};

export default SignupForm;
