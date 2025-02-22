import React, { useState } from 'react';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
    const [isSignup, setIsSignup] = useState(false); // Toggle between Login & Signup
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Invalid email format.');
            return;
        }
        if (isSignup && formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (isSignup) {
            console.log('Signed up successfully:', formData);
            alert('Account created successfully!');
        } else {
            console.log('Logged in successfully:', formData);
            alert('Logged in successfully!');
        }

        setShowLogin(false); // Close popup after successful login/signup
    };

    return (
        <div className="login-popup">
            <div className="login-popup-content">
                <button className="close-btn" onClick={() => setShowLogin(false)}>✖</button>
                <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    {isSignup && (
                        <>
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}

                    <button type="submit" className="login-btn">{isSignup ? 'Sign Up' : 'Login'}</button>
                </form>

                <p className="switch-text">
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <span onClick={() => setIsSignup(!isSignup)}>
                        {isSignup ? ' Sign In' : ' Sign Up'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPopup;
