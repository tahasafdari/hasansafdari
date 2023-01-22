import React from "react";
import "./nav.css";
import { FiHome } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookAlt />
      </a>
    </nav>
  );
};

export default Nav;
