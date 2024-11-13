import React, { useState } from "react";

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
    name: "",
    email: "",
    message: "",
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
    console.log("Form Submitted", formData);
    alert("Your message has been sent!");
  };

  return (
    <div
      className="body"
      style={{
        paddingTop: "130px",
        height: "100vh",
        marginTop: "-87px",
        boxSizing: "border-box",
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6)), url(./images/alphabet_bg.avif)',
         backgroundRepeat: "no-repeat, repeat",    
        backgroundSize: " cover, auto 110vh",
      }}
    >
      <div style={{ ...styles.container, margin: "auto", boxShadow:'0px 0px 5px 0px black' }}>
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
              If you have any work from me or any types of queries related to my
              tutorial, you can send me a message here. It's my pleasure to help
              you.
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
                <input
                  type="submit"
                  value="Send Now"
                  style={styles.submitButton}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1100px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "6px",
    padding: "20px 60px 30px 40px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSide: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "15px",
  },
  details: {
    margin: "14px",
    textAlign: "center",
  },
  icon: {
    fontSize: "30px",
    color: "#00bfff",
    marginBottom: "10px",
  },
  topic: {
    fontSize: "18px",
    fontWeight: "500",
  },
  textOne: {
    fontSize: "14px",
    color: "#afafb6",
  },
  textTwo: {
    fontSize: "14px",
    color: "#afafb6",
  },
  rightSide: {
    width: "75%",
    marginLeft: "75px",
  },
  topicText: {
    fontSize: "23px",
    fontWeight: "600",
    color: "#00bfff",
  },
  inputBox: {
    height: "55px",
    width: "100%",
    borderRadius: "6px",
    margin: "12px 0",
  },
  input: {
    height: "100%",
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "16px",
    backgroundColor: "#f0f1f8",
    borderRadius: "6px",
    padding: "0 15px",
  },
  textarea: {
    minHeight: "110px",
    resize: "none",
    paddingTop: "6px",
  },
  button: {
    display: "inline-block",
    marginTop: "12px",
    backgroundColor: "#00bfff",
  },
  submitButton: {
    color: "#fff",
    fontSize: "18px",
    outline: "none",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    backgroundColor: "#3e2093",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default ContactUs;
