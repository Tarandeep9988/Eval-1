import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className={"nav_bar"}>
        <img src="./images/logo.png" alt="logo" height="30" className="logo" />
        <ul className="nav_links">
          <li><a href="/">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="/leaderboard">Leaderboard</a></li>
        </ul>
        <button id="login_btn">Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
