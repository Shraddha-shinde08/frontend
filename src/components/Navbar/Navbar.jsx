import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import LoginPopup from '../LoginPopup/LoginPopup';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)
    const navigate = useNavigate();

    return (
        <>
            <div className='navbar'>
                <Link to='/'><img src={assets.logo} alt="Company Logo" className="logo" /></Link>
                <ul className="navbar-menu">
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="Search Icon" />
                    <div className="navbar-search-icon">
                        <Link to='/cart'><img src={assets.basket_icon} alt="Basket Icon" /></Link>
                        <div className={getTotalCartAmount()===0?"":"dot"}></div>
                    </div>
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
