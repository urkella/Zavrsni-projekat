import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../../components";

import logo from "./logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/" className="Logo-container">
      <Image className="Logo" src={logo} alt="Logo" />
      <span className="Logo-text">Diamond</span>
    </Link>
  );
};

export default Logo;
