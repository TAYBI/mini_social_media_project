import React from "react";
import ProjectSummory from "./ProjectSummory";

function ProjectList({ projects }) {
  console.log(projects);

  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => (
          <ProjectSummory project={project} key={project.id} />
        ))}{" "}
    </div>
  );
}

export default ProjectList;
