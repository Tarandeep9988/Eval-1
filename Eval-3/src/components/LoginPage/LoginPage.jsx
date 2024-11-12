import React from "react";
import styles from './LoginPage.module.css';
import classNames from 'classnames';

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
              <button className={styles.btn}>
                <img src="./images/google_logo.webp" alt="google_logo" /> Log in
                with Google
              </button>
              <button className={styles.btn}>
                <img src="./images/fb_logo.webp" alt="fb_logo" /> Log in with
                Facebook
              </button>
              <button className={styles.btn}>
                <img src="./images/twitter_logo.webp" alt="twitter_logo" /> Log
                in with Twitter
              </button>
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
        <script src="script.js"></script>
      </div>
    </>
  );
}

export default LoginPage;
