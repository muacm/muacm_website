
import React from 'react'
import { BrowserRouter as Router, Route, Link, HashRouter} from "react-router-dom";
import './Header.css'
import Logo from "../utils/assets/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <span className="logo-container">
        <a href="/">
          <img src={Logo} className="logo" />
        </a>
      </span>

      <ul className="header-option-list">
        <li className="header-option">
          <a href="/home#about-muacm">
            About
          </a>
        </li>
        <li className="header-option">
          <a href="/team">
            Team
          </a>
        </li>
        <li className="header-option">
          <a href="/events">
            Events
          </a>
        </li>
        <li className="header-option">
          <a href="/blog">
            Blog
          </a>
        </li>
      </ul>
    </div>
  )
};

export default Header;