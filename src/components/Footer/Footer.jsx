import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets'; // ✅ Fixed: Import assets

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Company Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et adipisci placeat, vel blanditiis possimus in quisquam 
            aliquid corrupti dicta itaque ipsum explicabo officiis animi tempora debitis cum quia iusto optio.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>📞 9511855965</li>
            <li>📧 tomato@gmail.com</li>
          </ul>
        </div>

      </div>

      <hr />
      <p className="footer-copyright">
        &copy; 2025 Tomato.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
