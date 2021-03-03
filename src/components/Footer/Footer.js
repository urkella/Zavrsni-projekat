import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="https://www.facebook.com" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
        </div>

        <div className="row list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="row">
          Copyright © {currentYear} Diamond. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
