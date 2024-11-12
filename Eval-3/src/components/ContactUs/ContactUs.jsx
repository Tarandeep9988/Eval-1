//import React from 'react';

// const ContactUs = () => {
//   const containerStyle = {
//     maxWidth: '1100px',
//     width: '100%',
//     background: '#fff',
//     borderRadius: '6px',
//     padding: '20px 60px 30px 40px',
//     boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 'auto',
//   };

//   const leftSideStyle = {
//     width: '25%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: '15px',
//     position: 'relative',
//   };

//   const rightSideStyle = {
//     width: '75%',
//     marginLeft: '75px',
//   };

//   const detailsStyle = {
//     margin: '14px',
//     textAlign: 'center',
//   };

//   const iconStyle = {
//     fontSize: '30px',
//     color: '#3e2093',
//     marginBottom: '10px',
//   };

//   const topicTextStyle = {
//     fontSize: '23px',
//     fontWeight: '600',
//     color: '#3e2093',
//   };

//   const inputBoxStyle = {
//     height: '55px',
//     width: '100%',
//     borderRadius: '6px',
//     margin: '12px 0',
//     backgroundColor: '#f0f1f8',
//   };

//   const buttonStyle = {
//     color: '#fff',
//     fontSize: '18px',
//     outline: 'none',
//     border: 'none',
//     padding: '8px 16px',
//     borderRadius: '6px',
//     background: '#3e2093',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     marginTop: '12px',
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//         <div style={leftSideStyle}>
//           <div style={detailsStyle}>
//             <i className="fas fa-map-marker-alt" style={iconStyle}></i>
//             <div>Address</div>
//             <div>Sector 20</div>
//             <div>Zirakpur(Chandigrah)</div>
//           </div>
//           <div style={detailsStyle}>
//             <i className="fas fa-phone-alt" style={iconStyle}></i>
//             <div>Phone</div>
//             <div>+919876543</div>
//             <div>+9112345678</div>
//           </div>
//           <div style={detailsStyle}>
//             <i className="fas fa-envelope" style={iconStyle}></i>
//             <div>Email</div>
//             <div>syashasvi@gmail.com</div>
//             <div>tarandeep@gmail.com</div>
//           </div>
//         </div>
//         <div style={rightSideStyle}>
//           <div style={topicTextStyle}>We would love to hear from you!</div>
//           <p>
//             If you have any work from me or any types of queries related to my tutorial, you can send me a
//             message from here. It's my pleasure to help you.
//           </p>
//           <form>
//             <div style={inputBoxStyle}>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 style={{ ...inputBoxStyle, padding: '0 15px', border: 'none', outline: 'none', fontSize: '16px' }}
//               />
//             </div>
//             <div style={inputBoxStyle}>
//               <input
//                 type="text"
//                 placeholder="Enter your email"
//                 style={{ ...inputBoxStyle, padding: '0 15px', border: 'none', outline: 'none', fontSize: '16px' }}
//               />
//             </div>
//             <div style={{ ...inputBoxStyle, minHeight: '110px' }}>
//               <textarea
//                 placeholder="Enter your message"
//                 style={{ ...inputBoxStyle, padding: '0 15px', border: 'none', outline: 'none', fontSize: '16px' }}
//               />
//             </div>
//             <div>
//               <input type="button" value="Send Now" style={buttonStyle} />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

// import React, { useState } from 'react';
// //import './contactus.css'; // Import CSS

// const ContactUs = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData); // Handle form submission through props
//     setFormData({ name: '', email: '', message: '' }); // Clear form after submission
//   };

//   return (
//     <div className="container">
//       <div className="content">
//         <div className="left-side">
//           <div className="address details">
//             <i className="fas fa-map-marker-alt"></i>
//             <div className="topic">Address</div>
//             <div className="text-one">Sector 20</div>
//             <div className="text-two">Zirakpur (Chandigarh)</div>
//           </div>
//           <div className="phone details">
//             <i className="fas fa-phone-alt"></i>
//             <div className="topic">Phone</div>
//             <div className="text-one">+919876543</div>
//             <div className="text-two">+9112345678</div>
//           </div>
//           <div className="email details">
//             <i className="fas fa-envelope"></i>
//             <div className="topic">Email</div>
//             <div className="text-one">syashasvi@gmail.com</div>
//             <div className="text-two">tarandeep@gmail.com</div>
//           </div>
//         </div>

//         <div className="right-side">
//           <div className="topic-text">We would love to hear from you!</div>
//           <p>
//             If you have any work from me or any queries related to my tutorial, you can send me a message from here.
//             It's my pleasure to help you.
//           </p>
//           <form onSubmit={handleSubmit}>
//             <div className="input-box">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="input-box">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="input-box message-box">
//               <textarea
//                 name="message"
//                 placeholder="Enter your message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 required
//               ></textarea>
//             </div>
//             <div className="button">
//               <input type="submit" value="Send Now" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import React, { useState } from 'react';
//import './ContactUs.css';

const ContactDetail = ({ iconClass, topic, textOne, textTwo }) => (
  <div style={styles.details}>
    <i className={iconClass} style={styles.icon}></i>
    <div style={styles.topic}>{topic}</div>
    <div style={styles.textOne}>{textOne}</div>
    <div style={styles.textTwo}>{textTwo}</div>
  </div>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    alert('Your message has been sent!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.leftSide}>
          <ContactDetail
            iconClass="fas fa-map-marker-alt"
            topic="Address"
            textOne="Sector 20"
            textTwo="Zirakpur (Chandigrah)"
          />
          <ContactDetail
            iconClass="fas fa-phone-alt"
            topic="Phone"
            textOne="+919876543"
            textTwo="+9112345678"
          />
          <ContactDetail
            iconClass="fas fa-envelope"
            topic="Email"
            textOne="syashasvi@gmail.com"
            textTwo="tarandeep@gmail.com"
          />
        </div>

        <div style={styles.rightSide}>
          <div style={styles.topicText}>We would love to hear from you!</div>
          <p>
            If you have any work from me or any types of queries related to my tutorial, you can
            send me a message here. It's my pleasure to help you.
          </p>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputBox}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.inputBox}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.inputBox}>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                style={{ ...styles.input, ...styles.textarea }}
              ></textarea>
            </div>
            <div style={styles.button}>
              <input type="submit" value="Send Now" style={styles.submitButton} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1100px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '6px',
    padding: '20px 60px 30px 40px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSide: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '15px',
  },
  details: {
    margin: '14px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '30px',
    color: '#3e2093',
    marginBottom: '10px',
  },
  topic: {
    fontSize: '18px',
    fontWeight: '500',
  },
  textOne: {
    fontSize: '14px',
    color: '#afafb6',
  },
  textTwo: {
    fontSize: '14px',
    color: '#afafb6',
  },
  rightSide: {
    width: '75%',
    marginLeft: '75px',
  },
  topicText: {
    fontSize: '23px',
    fontWeight: '600',
    color: '#3e2093',
  },
  inputBox: {
    height: '55px',
    width: '100%',
    borderRadius: '6px',
    margin: '12px 0',
  },
  input: {
    height: '100%',
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    backgroundColor: '#f0f1f8',
    borderRadius: '6px',
    padding: '0 15px',
  },
  textarea: {
    minHeight: '110px',
    resize: 'none',
    paddingTop: '6px',
  },
  button: {
    display: 'inline-block',
    marginTop: '12px',
  },
  submitButton: {
    color: '#fff',
    fontSize: '18px',
    outline: 'none',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    backgroundColor: '#3e2093',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default ContactUs;
