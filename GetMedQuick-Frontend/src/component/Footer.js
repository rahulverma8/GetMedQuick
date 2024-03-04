import React from "react";
import "../Styles/Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer-outerarea">
        <div className="footer-col">
          <div className="footer-row">
            <p className="footer-subtitle">About</p>
            <ul className="footer-list">
              <li>
                <a href="/#" className="footer-li-item">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#" className="footer-li-item">
                  Services
                </a>
              </li>
              <li>
                <a href="/#" className="footer-li-item">
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-row">
            <p className="footer-subtitle">Help</p>
            <ul className="footer-list">
              <li>
                <a href="/#" className="footer-li-item">
                  {" "}
                  Privacy Policy
                </a>{" "}
              </li>
              <li>
                <a href="/#" className="footer-li-item">
                  {" "}
                  Report{" "}
                </a>{" "}
              </li>
              <li>
                <a href="/#" className="footer-li-item">
                  {" "}
                  Terms & conditions{" "}
                </a>{" "}
              </li>
              <li>
                <a href="/#" className="footer-li-item">
                  {" "}
                  FAQ{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-row">
            <p className="footer-subtitle">Connect With us</p>
            <ul className="footer-li-icontainer">
              <li>
                <a
                  className="footer-li-icon"
                  to="https://www.facebook.com/kunal.markam.102"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  className="footer-li-icon"
                  href="https://www.instagram.com/kunal.markam.15/"
                  target="_blank"
                >
                  {" "}
                  <FaInstagram />
                </a>{" "}
              </li>
              <li>
                <a
                  className="footer-li-icon"
                  href="https://www.linkedin.com/in/kunal-markam-32a5981b3"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedin />
                </a>{" "}
              </li>
              <li>
                <a
                  className="footer-li-icon"
                  href="mailto:kunal15markam@gmail.com"
                  target="_blank"
                >
                  <FaEnvelope />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p id="cpright"> &copy; Copyright {new Date().getFullYear()} HCMS</p>
    </footer>
  );
};

export default Footer;
