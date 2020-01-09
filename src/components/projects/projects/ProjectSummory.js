import React from "react";

function ProjectSummory({ project }) {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
          <span className="text-grey">7/1/2020</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectSummory;
