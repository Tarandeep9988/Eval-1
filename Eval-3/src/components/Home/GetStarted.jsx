import React from 'react'
import { useNavigate } from 'react-router-dom'

function GetStarted() {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        if (localStorage.getItem('isLoggedIn') === 'true') {
          navigate('/levels')
        }
        else {
          alert('Please login to continue');
          navigate('/login');
        }
      };
  return (
    <button className="get_started_btn" id="get_started_button1" onClick={handleGetStarted}>Get started</button>
  )
}

export default GetStarted