// import React from 'react';

// const AboutUs = () => {
//   const styles = {
//     body: {
//       fontFamily: 'Arial, sans-serif',
//       margin: 0,
//       padding: 0,
//       backgroundColor: '#f4f4f9',
//       color: '#333',
//     },
//     header: {
//       backgroundColor: '#8EC5FC',
//       backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
//       color: '#fff',
//       textAlign: 'center',
//       padding: '20px',
//     },
//     headerH1: {
//       margin: 0,
//       fontSize: '2.5em',
//     },
//     headerP: {
//       fontSize: '20px',
//     },
//     mission: {
//       padding: '20px',
//       textAlign: 'center',
//       backgroundColor: '#85FFBD',
//       backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
//     },
//     missionH2: {
//       fontSize: '2em',
//       marginBottom: '10px',
//     },
//     missionP: {
//       fontSize: '20px',
//     },
//     team: {
//       padding: '20px',
//       backgroundColor: '#85FFBD',
//       backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
//       textAlign: 'center',
//     },
//     teamH2: {
//       fontSize: '2em',
//       marginBottom: '20px',
//     },
//     teamMembers: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '20px',
//       flexWrap: 'wrap',
//     },
//     teamMember: {
//       backgroundColor: '#fff',
//       padding: '15px',
//       border: '1px solid #ddd',
//       borderRadius: '10px',
//       width: '300px',
//       textAlign: 'center',
//     },
//     teamMemberImg: {
//       borderRadius: '20%',
//       width: '150px',
//       height: '150px',
//       objectFit: 'cover',
//       marginBottom: '10px',
//     },
//     teamMemberH3: {
//       margin: '10px 0 5px',
//       fontSize: '1.2em',
//       color: '#6c63ff',
//     },
//     footer: {
//       backgroundColor: '#333',
//       color: '#fff',
//       textAlign: 'center',
//       padding: '10px',
//       position: 'fixed',
//       width: '100%',
//       bottom: 0,
//     },
//   };

//   return (
//     <div style={styles.body}>
//       <header style={styles.header}>
//         <h1 style={styles.headerH1}>About Us</h1>
//         <p style={styles.headerP}>Welcome to our typing website, where you can enhance your typing skills and speed!</p>
//       </header>

//       <section style={styles.mission}>
//         <h2 style={styles.missionH2}>Our Mission</h2>
//         <p style={styles.missionP}>Our aim is to provide the best platform for people of all ages to improve their typing skills through interactive and engaging lessons.</p>
//       </section>

//       <section style={styles.team}>
//         <h2 style={styles.teamH2}>Meet the Team</h2>
//         <div style={styles.teamMembers}>
//           <div style={styles.teamMember}>
//             <img src="./images/teammem1img.jpg" alt="Tarandeep Singh" style={styles.teamMemberImg} />
//             <h3 style={styles.teamMemberH3}>Tarandeep Singh</h3>
//             <p>Founder & CEO</p>
//           </div>
//           <div style={styles.teamMember}>
//             <img src="./images/teammem2img.jpg" alt="Yashasvi Sharma" style={styles.teamMemberImg} />
//             <h3 style={styles.teamMemberH3}>Yashasvi Sharma</h3>
//             <p>Lead Developer</p>
//           </div>
//           <div style={styles.teamMember}>
//             <img src="./images/teammem3img.jpg" alt="Supreme Singh" style={styles.teamMemberImg} />
//             <h3 style={styles.teamMemberH3}>Supreme Singh</h3>
//             <p>Content Creator</p>
//           </div>
//         </div>
//       </section>

//       <footer style={styles.footer}>
//         <p>&copy; 2024 Typing Website. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default AboutUs;


import "./AboutUs.css";

export default function App() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <div classNameName="App">
      <nav>
        <div>
          <a href="yashasvisharma@gmail.com">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/email-letter-envelope-message-38065.png"
              alt="G-mail"
            />
            <span
              style={{
                color: "white",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
              yashasvisharma@gmail.com
            </span>
          </a>
          <a href="tel: +91 123456789">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/telephone-41-117249.png"
              alt=""
            />
            <span
              style={{
                color: "white",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
              +91 123456789
            </span>
          </a>
        </div>
        <div>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/instagram-1868978-1583142.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-3771014-3147631.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
              alt=""
            />
          </a>
        </div>
      </nav>
      <header id="head">
        <a href={{}}>
          <span>
            <img
              src="https://www.ecerasystem.com/ecerasystem/images/eslogo.png"
              alt="Logo"
            />
          </span>
          <span id="c_name">ECERA SYSTEM</span>
        </a>
        <ul>
          <li>
            <a href={{}}>Home</a>
          </li>
          <li>
            <a href={{}} onMouseOver={gok} onMouseLeave={kog}>
              Register/Sign In
            </a>
            <div id="brr"></div>
          </li>
          <li>
            <a href={{}} onMouseOver={fok} onMouseLeave={kof}>
              Services
            </a>
            <div id="arr"></div>
          </li>
          <li>
            <a href={{}}>Contact Us</a>
          </li>
        </ul>
      </header>
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>Welcome,To Typing Train</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="font"
          />
          <p>
            " The primary goal of a typing testing website is to help users improve their typing speed and accuracy by providing a structured environment for practice and assessment. This website offers users a platform to measure their typing skills through timed tests, where they can track their progress over time and set personalized goals. "
          </p>
        </div>

        <div id="first" className="reveal">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
            alt=""
          />
          <div>
            <h1>We Offer Innovative Technology Solutions</h1>
            <p>
            It includes interactive features to challenge users in various typing exercises, measure words per minute (WPM), error rates, and provide feedback on performance. Additionally, the site might offer exercises to target specific typing skills, allowing users to focus on areas that need improvement and encouraging continuous practice for mastery.
            </p>
            <h2>Increases Typing Speed(90%)</h2>
            <div className="comm">
              <div id="comm1"></div>
            </div>
            <h2>Error Detection(85%)</h2>
            <div className="comm">
              <div id="comm2"></div>
            </div>
            <h2> Enhance Typing Skills(70%)</h2>
            <div className="comm">
              <div id="comm3"></div>
            </div>
          </div>
        </div>

        <div id="fourth" className="reveal">
          <h2 style={{ color: "white" }}>TECHNOLOGY INDEX</h2>
          <h1 style={{ color: "white" }}>
            Real Time Monitoring Your Infrstracture Branded Degital Solutions
          </h1>
          <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt=" "
              />
              <p>DATA ANALYTICS</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt=" "
              />
              <p>UI/UX DESIGN</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt=" "
              />
              <p>WEB DEVELOPEMENT</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt=" "
              />
              <p>Q&A TESTING</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt=" "
              />
              <p>DEDICATED TEAM</p>
            </div>
          </div>
        </div>

        <div id="second" className="reveal">
          <div className="container">
            <div>
              <h1>WE PROVIDE</h1>
              <h2>Remote Employee</h2>
              <p>
                A huge pool of talent from every domain available for your
                office. Solve your freelancing problems by letting us help you
                find the most suitable employee or a whole team that won't let
                you down. Everything is managed by Indirect Employee staff!
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>WE HAVE</h1>
              <h2>Global Partnership</h2>
              <p>
                Our Global parters are spread 12 countries and our client base
                is growing day by day . Many of my clients are repeat customers
                and several have come to us through high recommendation and
                referrals . Our client hail from different domains
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR GOAL</h1>
              <h2>Same Quality at Low Cost</h2>
              <p>
                We have unique and revolutionary business principle, ‘Same
                quality but significantly lower cost’. we aims to fulfill the
                long-standing outsourcing vacuum felt by Small Medium
                Enterprises across the country who, till now, were dependent
                mostly on offshore freelancers.The hired professionals match
                their western counterparts in skills, qualifications and
                experience alongwith the added advantage of attractive low
                costs.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR STRENGTHS</h1>
              <h2>1.Personalized Process Tracking:</h2>
              <p>
              The website provides a detailed record of each user’s progress over time, highlighting improvements in speed, accuracy, and consistency. 
              </p>
              <h2>2.Real-Time Feedback and Analytics:</h2>
              <p>Users receive immediate feedback on typing speed (words per minute) and accuracy, including specific areas where errors are most frequent. This real-time data helps users to adjust their typing technique and make rapid improvements.</p>
              <h2>3.Varied Practice Exercises:</h2>
              <p>The platform offers a range of typing exercises and difficulty levels, from simple word lists to complex passages, ensuring a suitable challenge for typists of all skill levels. This variety keeps practice sessions engaging and adaptive to the user’s growing capabilities.</p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
        </div>

        <div id="third" className="reveal">
          <h3 style={{ textAlign: "center" }}>OUR PROCESS</h3>
          <h1 style={{ textAlign: "center" }}>
            Driving Client Results Utilizing New Innovation Points of view
          </h1>
          <div id="third_cards">
            <div>
              <h2>End to End Solutions and Services Guaranteed</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2>Ahead of The Curve We Future-proof Your IT</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2>Experience Certainty Every Project Executed Successful</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>

        <div id="fifth" className="reveal">
          <h1>Typing Train</h1>
          <div>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
                alt=" "
              />
              <span>
                <h3>Address</h3>
                <p>4813 Woodland Ave Royal Oak, Michigan - 48073, USA</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt=" "
              />
              <span>
                <h3>Phone</h3>
                <p>+1 248 672 1972</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt=" "
              />
              <span>
                <h3>E-mail</h3>
                <p>Sales@Ecerasystem.com</p>
              </span>
            </a>
          </div>
        </div>
      </main>

      <footer
        style={{ display: "flex", "justify-content": "space-around" }}
        id="foote"
      >
        <ul>
          <li>
            <a href={{}}>About Us</a>
          </li>
          <li>
            <a href={{}}>Carrers</a>
          </li>
          <li>
            <a href={{}}>Blogs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={{}}>Training</a>
          </li>
          <li>
            <a href={{}}>FAQs</a>
          </li>
        </ul>
        <div>
          <h2>Conatact Us</h2>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png"
                alt=" "
              />
            </a>
          </span>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
                alt=" "
              />
            </a>
          </span>
          <a
            href="tel: 123456789"
            style={{
              color: "white",
              fontSize: "1.3em",
              letterSpacing: "2px",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bolder",
              marginTop: "20px"
            }}
          >
            Telephone No: +91 232345553
          </a>
        </div>
      </footer>
      <p
        style={{
          color: "white",
          textAlign: "center",
          background: "rgb(27, 27, 27)",
          padding: "10px 0px"
        }}
      >
        &copy;Copyright <b>ecerasystem</b>. All Rights Reserved
      </p>
    </div>
  );
}
