import React from "react";
import styles from './LoginPage.module.css';
import classNames from 'classnames';
import Button from "./Button";


function LoginPage() {
  return (
    <>
      <div className={styles.body}>
        <form className={styles.main_section_login}>
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
                <input type="text" id="user" required />
              </div>
              <div className={styles.pass_box}>
                <p>
                  <label htmlFor="user_pass">Password</label>
                  <a id="forgot_pass" className={styles.forgot_pass} href="">
                    Forgot password?
                  </a>
                </p>
                <input type="password" id="user_pass" required />
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
