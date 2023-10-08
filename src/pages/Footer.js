
import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Welcome to Our travel Website, where the journey begins!
             We are passionate about creating unforgettable travel experiences that go beyond the ordinary.</p>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          

          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" rel="noopener noreferrer">Facebook</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" rel="noopener noreferrer">Twitter</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#"  rel="noopener noreferrer">Instagram</a>
 

        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Your Travel Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
