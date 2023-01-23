import React from "react";
import CV from "../../assets/CV.pdf";

const Download = () => {
  return (
    <div className="download">
      <a href={CV} download className="btn" rel="noreferrer" target={"_blank"}>
        Resume
      </a>
    </div>
  );
};

export default Download;
