import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    useEffect(() => {
        // 1. Define what we want to do on scroll
        const handleScroll = () => {
            // Find elements we want to change
            const header = document.querySelector('header');
            const toTopArrow = document.getElementById('to-top-arrow');
            
            // Check scroll position: add 'scrolled' class if scrolled more than 10px
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
                toTopArrow.style.opacity = "1";  // Show "to top" arrow
                toTopArrow.style.visibility = "visible";
            } else {
                header.classList.remove('scrolled');
                toTopArrow.style.opacity = "0";  // Hide "to top" arrow
                toTopArrow.style.visibility = "hidden";
            }
        };

        // 2. Attach our handleScroll function to the scroll event
        window.addEventListener('scroll', handleScroll);

        // 3. Cleanup: remove scroll event when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty array means this effect runs only once, on mount

  return (
    <header>
      <nav className="nav_bar">
        <img src="./images/logo.png" alt="logo" height="30" className="logo" />
        <ul className="nav_links">
          <li><NavLink style={({ isActive }) => ({color: isActive ? '#1E90FF' : ''})} to="">Home</NavLink></li>
          <li><NavLink style={({ isActive }) => ({color: isActive ? '#1E90FF' : ''})} to="about">About</NavLink></li>
          <li><NavLink style={({ isActive }) => ({color: isActive ? '#1E90FF' : ''})} to="contact">Contact</NavLink></li>
        </ul>
        <button id="login_btn">Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
