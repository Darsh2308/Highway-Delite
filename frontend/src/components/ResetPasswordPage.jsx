import React, { useState } from 'react';
import { auth } from '../config/firebase.config'; // Import auth
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import './ResetPasswordPage.css'; // Add a CSS file for styling

const ResetPasswordPage = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        setError('');
        setSuccess('');

        try {
            const user = auth.currentUser;
            if (user) {
                const credential = EmailAuthProvider.credential(user.email, currentPassword);
                await reauthenticateWithCredential(user, credential); // Reauthenticate user
                await updatePassword(user, newPassword); // Update password
                setSuccess('Password updated successfully!');
                // Optionally navigate to another page or inform the user
            } else {
                setError('User not authenticated.');
            }
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                setError('The current password is incorrect.');
            } else {
                setError('An error occurred. Please try again.');
            }
            console.error("Error resetting password:", error.message);
        }
    };

    return (
        <form onSubmit={handleResetPassword} className="reset-password-form">
            <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Current Password"
                required
            />
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                required
            />
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
            />
            <button type="submit">Reset Password</button>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
        </form>
    );
};

export default ResetPasswordPage;
