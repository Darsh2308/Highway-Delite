import React, { useState } from 'react';
import { auth } from '../config/firebase.config'; // Ensure correct import path
import { signInWithEmailAndPassword } from 'firebase/auth';
import './LoginPage.css'; // Import the new CSS file

const LoginPage = ({ setShowSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful!');
            window.location.href = '/home'; // Use the path for your homepage
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                setError('Incorrect password. Please try again.');
            } else if (error.code === 'auth/user-not-found') {
                setError('No user found with this email. Please sign up first.');
            } else {
                setError('An error occurred. Please try again.');
            }
            console.error("Error logging in:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
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
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p className="error">{error}</p>}
            </form>
            <p>
                Don't have an account?{' '}
                <button onClick={() => setShowSignup(true)}>Sign Up</button>
            </p>
        </div>
    );
};

export default LoginPage;
