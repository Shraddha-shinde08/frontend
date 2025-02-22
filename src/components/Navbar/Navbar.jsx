import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import LoginPopup from '../LoginPopup/LoginPopup';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
            <div className='navbar'>
                <img src={assets.logo} alt="Company Logo" className="logo" />
                <ul className="navbar-menu">
                    <li onClick={() => setMenu("home") || navigate('/')} className={menu === "home" ? "active" : ""}>Home</li>
                    <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                    <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
                    <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
                    <li onClick={() => navigate('/add-restaurant')}>Add Restaurant</li> {/* ✅ New Menu Option */}
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="Search Icon" />
                    <div className="navbar-search-icon">
                        <img src={assets.basket_icon} alt="Basket Icon" />
                        <div className="dot"></div>
                    </div>
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                    <button onClick={() => navigate('/add-restaurant')}>Add Restaurant</button> {/* ✅ Button for Easy Access */}
                </div>
            </div>
        </>
    );
};

export default Navbar;
