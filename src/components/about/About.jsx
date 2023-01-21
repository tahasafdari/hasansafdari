import React from "react";
import "./about.css";

import { RiArrowDropRightLine } from "react-icons/ri";

import profilePic from "../../assets/profilepic.jpeg";

const about = () => {
  return (
    <section id="about" className="about">
      <div className="about__me-txt">
        <h2>About Me</h2>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <div className="color__overlay">
              <img className="img" src={profilePic} alt="About Me" />
            </div>
          </div>
        </div>
        <div className="about__content">
          <p>
            Hello and welcome! My name is Hasan. I am a software developer
            student at Metropolia University of Applied Science in Helsinki,
            Finland.I enjoy creating web applications and other creative stuff!
            <br></br>
            <br></br>
          </p>
          <p>Take a look at my work through tabs :)</p>
          <br></br>
          <p>
            Here are some technologies I've been studied and aim to progress my
            skills:
          </p>
          <ul>
            <li>
              <RiArrowDropRightLine className="icon__content" />
              JavaScript (ES6+)
            </li>
            <li>
              <RiArrowDropRightLine className="icon__content" />
              React
            </li>
            <li>
              <RiArrowDropRightLine className="icon__content" />
              Node.js
            </li>
            <li>
              <RiArrowDropRightLine className="icon__content" />
              WordPress
            </li>
            <li>
              <RiArrowDropRightLine className="icon__content" />
              Java
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default about;
