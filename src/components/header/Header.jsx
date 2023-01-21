import React from "react";
import "./header.css";
import Download from "./Download";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <div className="header_cont">
      <div className="container header__container">
        <h4>Hi, my name is</h4>
        <h1 className="name">Hasan Safdari.</h1>
        <h2>I am a software developer student.</h2>
        <Download />
        <HeaderSocials />
      </div>
    </div>
  );
};

export default Header;
