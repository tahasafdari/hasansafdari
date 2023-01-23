import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/hasan-safdari-44829a261/"
        rel="noreferrer"
        target={"_blank"}
        className="social__icons"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/tahasafdari"
        rel="noreferrer"
        target={"_blank"}
        className="social__icons"
      >
        {" "}
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
