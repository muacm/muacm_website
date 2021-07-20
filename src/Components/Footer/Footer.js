
import "./Footer.css";
import Logo from "../utils/assets/logo.png"
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import PopUpFormContent from "../../Components/PopUpFormContent/PopUpFormContent";

const Footer = () => {
  // state and stateHandler for the registration form POPUP-MODAL
  const [registrationFormPopupState, setRegistrationFormPopupState] = useState(false);
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
            <li className="footer-list-item" target="_blank">
              <a href="http://www.medicaps.ac.in/" rel="noreferrer">
                Medicaps University
              </a>
            </li>
            <li className="footer-list-item">
              <a href="https://sticmedicaps.org.in/" rel="noreferrer" target="_blank">
                STIC
              </a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.acm.org/" rel="noreferrer" target="_blank">
                ACM
              </a>
            </li>
            <li className="footer-list-item">
              Terms and Conditions
            </li>
          </ul>
        </div>

        {/* Social Media Handles Container */}
        <div id="footer-icon-layer">
          <h3>
            Social Media Handles
          </h3>
          <ul className="footer-list icon">
            <li className="footer-list-item">
              <a href="https://www.linkedin.com/company/acm-student-chapter-medicaps/" rel="noreferrer" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="footer-list-item">
              <a href="https://www.instagram.com/muacm" rel="noreferrer" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="footer-list-item">
              <a href="https://discord.gg/jVxbpUabyR" rel="noreferrer" target="_blank">
                <i className="fab fa-discord"></i>
              </a>
            </li>
            <li className="footer-list-item">
              <a href="https://twitter.com/ACMMedicaps" rel="noreferrer" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <button className="primaryButton" 
            onClick={() => setRegistrationFormPopupState(true)}
          >
            Subscribe for mails
          </button>
        </div>
      </div>
      <div className="Footer-LowerLayer">
        <p>
          Copyright © 2021 <a href="/">MUACM</a> All rights Reserved
        </p>
      </div>
      {/* Creating a ReactModal for registration form popup */}
      <ReactModal isOpen={registrationFormPopupState}
        onRequestClose={() => setRegistrationFormPopupState(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '880px',
            height: '800px',
            overflow: 'hidden',
            boxSizing: 'border-box'
          },
          content: {
            background: 'none',
            border: 'none',
            outline: 'none'
          }
        }}
        className="animate__animated animate__fadeInUp"
      >
        <PopUpFormContent />
      </ReactModal>
    </div>
  )
};

export default Footer;