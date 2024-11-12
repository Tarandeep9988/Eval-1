import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            const toTopArrow = document.getElementById('to-top-arrow');
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
                toTopArrow.style.opacity = "1";  
                toTopArrow.style.visibility = "visible";
            } else {
                header.classList.remove('scrolled');
                toTopArrow.style.opacity = "0";
                toTopArrow.style.visibility = "hidden";
            }
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const navigate = useNavigate();
    const goToLogin = () => {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            localStorage.setItem('isLoggedIn', 'false');
            alert('Logged Out Successfully');
            navigate('/');
        }
        else {
          navigate('/login');
        }
    }
  return (
    <header>
      <nav className="nav_bar">
        <img src="./images/logo.png" alt="logo" height="30" className="logo" />
        <ul className="nav_links">
          <li><NavLink style={({ isActive }) => ({color: isActive ? '#1E90FF' : ''})} to="">Home</NavLink></li>
          <li><NavLink style={({ isActive }) => ({color: isActive ? '#1E90FF' : ''})} to="aboutUs">About</NavLink></li>
          <li><NavLink style={({ isActive }) => ({color: isActive ? '#1E90FF' : ''})} to="contactUs">Contact</NavLink></li>
        </ul>
        <button id="login_btn" onClick={goToLogin}>{localStorage.getItem('isLoggedIn') === 'true' ? 'LogOut' : 'Login'}</button>
      </nav>
    </header>
  );
};

export default Navbar;
