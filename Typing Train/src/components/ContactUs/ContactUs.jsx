import React from 'react';

const ContactUs = () => {
  const containerStyle = {
    maxWidth: '1100px',
    width: '100%',
    background: '#fff',
    borderRadius: '6px',
    padding: '20px 60px 30px 40px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  };

  const leftSideStyle = {
    width: '25%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15px',
    position: 'relative',
  };

  const rightSideStyle = {
    width: '75%',
    marginLeft: '75px',
  };

  const detailsStyle = {
    margin: '14px',
    textAlign: 'center',
  };

  const iconStyle = {
    fontSize: '30px',
    color: '#3e2093',
    marginBottom: '10px',
  };

  const topicTextStyle = {
    fontSize: '23px',
    fontWeight: '600',
    color: '#3e2093',
  };

  const inputBoxStyle = {
    height: '55px',
    width: '100%',
    borderRadius: '6px',
    margin: '12px 0',
    backgroundColor: '#f0f1f8',
  };

  const buttonStyle = {
    color: '#fff',
    fontSize: '18px',
    outline: 'none',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    background: '#3e2093',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '12px',
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={leftSideStyle}>
          <div style={detailsStyle}>
            <i className="fas fa-map-marker-alt" style={iconStyle}></i>
            <div>Address</div>
            <div>Sector 20</div>
            <div>Zirakpur(Chandigrah)</div>
          </div>
          <div style={detailsStyle}>
            <i className="fas fa-phone-alt" style={iconStyle}></i>
            <div>Phone</div>
            <div>+919876543</div>
            <div>+9112345678</div>
          </div>
          <div style={detailsStyle}>
            <i className="fas fa-envelope" style={iconStyle}></i>
            <div>Email</div>
            <div>syashasvi@gmail.com</div>
            <div>tarandeep@gmail.com</div>
          </div>
        </div>
        <div style={rightSideStyle}>
          <div style={topicTextStyle}>We would love to hear from you!</div>
          <p>
            If you have any work from me or any types of queries related to my tutorial, you can send me a
            message from here. It's my pleasure to help you.
          </p>
          <form>
            <div style={inputBoxStyle}>
              <input
                type="text"
                placeholder="Enter your name"
                style={{ ...inputBoxStyle, padding: '0 15px', border: 'none', outline: 'none', fontSize: '16px' }}
              />
            </div>
            <div style={inputBoxStyle}>
              <input
                type="text"
                placeholder="Enter your email"
                style={{ ...inputBoxStyle, padding: '0 15px', border: 'none', outline: 'none', fontSize: '16px' }}
              />
            </div>
            <div style={{ ...inputBoxStyle, minHeight: '110px' }}>
              <textarea
                placeholder="Enter your message"
                style={{ ...inputBoxStyle, padding: '0 15px', border: 'none', outline: 'none', fontSize: '16px' }}
              />
            </div>
            <div>
              <input type="button" value="Send Now" style={buttonStyle} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
