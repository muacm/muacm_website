import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import "./Header.css";
import Logo from "../utils/assets/logo.png";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let ulCss = ["header-option-list"];
  if (isDrawerOpen) {
    ulCss.push("open-drawer");
  } else {
    ulCss.push("close-drawer");
  }

  return (
    <div className="Header">
      <span className="logo-container">
        <a href="/">
          <img src={Logo} className="logo" />
        </a>
      </span>

      <div
        onClick={() => setIsDrawerOpen((prev) => !prev)}
        className="header-drawer-btn"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul
        onClick={() => setIsDrawerOpen((prev) => !prev)}
        className={ulCss.join(" ")}
      >
        <li className="header-option">
          <a href="/home#about-muacm">About</a>
        </li>
        <li className="header-option">
          <a href="/team">Team</a>
        </li>
        <li className="header-option">
          <a href="/events">Events</a>
        </li>
        <li className="header-option">
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
