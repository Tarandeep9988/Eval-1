import React from "react";
import styles from './LoginPage.module.css';
import classNames from 'classnames';
import Button from "./Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const user_id = useRef(null);
  const user_pass = useRef(null);
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user_id.current.value === "" || user_pass.current.value === "") {
      alert("Please fill all the fields");
    }
    else if (user_id.current.value === "admin" && user_pass.current.value === "admin") {
      alert("Login Successful");
      localStorage.setItem("isLoggedIn", "true");
      navigator('/');
    }
    else {
      alert("Invalid Username/Password");
    }
  };

  return (
    <>
      <div className={styles.body}>
        <form className={styles.main_section_login}  onSubmit={handleSubmit}>
          <div className={styles.main_box1}>
            <h1>Log in</h1>
          </div>
          <div className={styles.main_box2}>
            <div className={styles.child_box1}>
              <Button imgSrc="./images/google_logo.webp" content="Google"/>
              <Button imgSrc="./images/fb_logo.webp" content="Facebook"/>
              <Button imgSrc="./images/twitter_logo.webp" content="Twitter"/>
            </div>
            <div className={styles.child_box3}>Or</div>
            <div className={styles.child_box2}>
              <div className={styles.email_box}>
                <p>
                  <label htmlFor="user">Username/Email</label>
                </p>
                <input type="text" id="user" required ref={user_id} />
              </div>
              <div className={styles.pass_box}>
                <p>
                  <label htmlFor="user_pass">Password</label>
                  <a id="forgot_pass" className={styles.forgot_pass} href="" tabIndex="-1">
                    Forgot password?
                  </a>
                </p>
                <input type="password" id="user_pass" required ref={user_pass} />
              </div>
            </div>
          </div>
          <div className="main_box3">
            <button className={classNames(styles.btn, styles.login_btn)} type="submit">
              Log in
            </button>
            <p>
              Don't have an account? <a href="">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
