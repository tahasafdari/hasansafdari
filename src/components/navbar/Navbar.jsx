import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="container" id="nav">
      <div className="top__nav">
        <a href="#experience">Projects</a>
        <a href="#about">About</a>
        <img src={logo} alt="Logo" />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
