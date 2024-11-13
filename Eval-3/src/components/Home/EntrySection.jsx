import React from 'react'
import { Link } from 'react-router-dom'

function EntrySection() {
  return (
    <>
        <div className="main_section">
            <div className="main_child">
                <h2 className="main-section-heading">Master Your Typing Skills - Speed, Accuracy, and Fun in One Place!</h2>
                <div className="main_child_box">
                    <Link to={'typingtest'}>Typing test</Link>
                    <Link to={'levels'}>Get Started</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default EntrySection