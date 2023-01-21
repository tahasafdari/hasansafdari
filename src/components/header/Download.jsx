import React from "react";
/* import CV from '../../assests/cv.pdf' */

const Download = () => {
  return (
    <div className="download">
      {/*<a href={CV}>Resume</a> */}
      <a
        href="#SDFSDF"
        download
        className="btn"
        rel="noreferrer"
        target={"_blank"}
      >
        Resume
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
    </div>
  );
};

export default Download;
