
import "./Footer.css";
import Logo from "../utils/assets/logo.png"


const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-UpperLayer">
        <div>
          <img src={Logo} alt="logo" />
        </div>

        {/* Useful Links Container */}
        <div>
          <h3>
            Useful Links
          </h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              Medicaps University
            </li>
            <li className="footer-list-item">
              STIC
            </li>
            <li className="footer-list-item">
              ACM
            </li>
            <li className="footer-list-item">
              Terms and Conditions
            </li>
          </ul>
        </div>

        {/* Social Media Handles Container */}
        <div>
          <h3>
            Social Media Handles
          </h3>
          <ul className="footer-list icon">
            <li className="footer-list-item">
              <i className="fab fa-linkedin"></i>
            </li>
            <li className="footer-list-item">
              <i className="fab fa-instagram"></i>
            </li>
            <li className="footer-list-item">
              <i className="fab fa-discord"></i>
            </li>
            <li className="footer-list-item">
              <i className="fab fa-facebook"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer-LowerLayer">
        <p>
          Copyright © 2021 <a href="/">MUACM</a> All rights Reserved
        </p>
      </div>
    </div>
  )
};

export default Footer;