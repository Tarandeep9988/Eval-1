import React from 'react';

const AboutUs = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f4f4f9',
      color: '#333',
    },
    header: {
      backgroundColor: '#8EC5FC',
      backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
    },
    headerH1: {
      margin: 0,
      fontSize: '2.5em',
    },
    headerP: {
      fontSize: '20px',
    },
    mission: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#85FFBD',
      backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
    },
    missionH2: {
      fontSize: '2em',
      marginBottom: '10px',
    },
    missionP: {
      fontSize: '20px',
    },
    team: {
      padding: '20px',
      backgroundColor: '#85FFBD',
      backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
      textAlign: 'center',
    },
    teamH2: {
      fontSize: '2em',
      marginBottom: '20px',
    },
    teamMembers: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    teamMember: {
      backgroundColor: '#fff',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      width: '300px',
      textAlign: 'center',
    },
    teamMemberImg: {
      borderRadius: '20%',
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      marginBottom: '10px',
    },
    teamMemberH3: {
      margin: '10px 0 5px',
      fontSize: '1.2em',
      color: '#6c63ff',
    },
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      width: '100%',
      bottom: 0,
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1 style={styles.headerH1}>About Us</h1>
        <p style={styles.headerP}>Welcome to our typing website, where you can enhance your typing skills and speed!</p>
      </header>

      <section style={styles.mission}>
        <h2 style={styles.missionH2}>Our Mission</h2>
        <p style={styles.missionP}>Our aim is to provide the best platform for people of all ages to improve their typing skills through interactive and engaging lessons.</p>
      </section>

      <section style={styles.team}>
        <h2 style={styles.teamH2}>Meet the Team</h2>
        <div style={styles.teamMembers}>
          <div style={styles.teamMember}>
            <img src="./images/teammem1img.jpg" alt="Tarandeep Singh" style={styles.teamMemberImg} />
            <h3 style={styles.teamMemberH3}>Tarandeep Singh</h3>
            <p>Founder & CEO</p>
          </div>
          <div style={styles.teamMember}>
            <img src="./images/teammem2img.jpg" alt="Yashasvi Sharma" style={styles.teamMemberImg} />
            <h3 style={styles.teamMemberH3}>Yashasvi Sharma</h3>
            <p>Lead Developer</p>
          </div>
          <div style={styles.teamMember}>
            <img src="./images/teammem3img.jpg" alt="Supreme Singh" style={styles.teamMemberImg} />
            <h3 style={styles.teamMemberH3}>Supreme Singh</h3>
            <p>Content Creator</p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Typing Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
