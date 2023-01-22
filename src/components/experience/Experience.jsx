import React from "react";
import "./experience.css";
import "./projectItem.css";
import ProjectItems from "./ProjectItems";
import { projectList } from "../../helpers/ProjectList";

const Experience = () => {
  return (
    <section id="experience" className="projects">
      <div className="my__project-text">
        <h2>Projects</h2>
        <div className="projectList">
          {projectList.map((project) => {
            return (
              <ProjectItems
                name={project.name}
                image={project.image}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
