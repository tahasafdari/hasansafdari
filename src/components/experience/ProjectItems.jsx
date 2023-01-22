import React from "react";
import { GrGithub } from "react-icons/gr";
import { MdOutlineViewInAr } from "react-icons/md";

const ProjectItems = ({ image, name, githubLink, demoLink }) => {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h3> {name} </h3>
      <a
        href={githubLink}
        rel="noreferrer"
        target={"_blank"}
        className="github__icon"
      >
        <GrGithub />
      </a>
      <a
        href={demoLink}
        rel="noreferrer"
        target={"_blank"}
        className="demo__icon"
      >
        <MdOutlineViewInAr />
      </a>
    </div>
  );
};

export default ProjectItems;
