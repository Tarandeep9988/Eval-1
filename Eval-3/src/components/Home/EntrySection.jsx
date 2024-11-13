import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EntrySection() {
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
    <>
        <div className="main_section">
            <div className="main_child">
                <h2 className="main-section-heading">Master Your Typing Skills - Speed, Accuracy, and Fun in One Place!</h2>
                <div className="main_child_box">
                    <Link to={'typingtest'}>Typing test</Link>
                    <button className='main_child_a' onClick={handleGetStarted}>Get Started</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default EntrySection