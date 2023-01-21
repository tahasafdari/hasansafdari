import React from "react";
import { GrGithub } from "react-icons/gr";

const ProjectItems = ({ image, name, githubLink }) => {
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
    </div>
  );
};

export default ProjectItems;
