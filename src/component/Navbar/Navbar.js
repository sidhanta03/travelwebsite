
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
const Navbar = () => {
  return (
    <nav>
      <div className="container">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link> 
       <Link to ="/signup" className="signup-button">Sign Up</Link>
            </div>
     </div>
    </nav>
  );
};

export default Navbar;
