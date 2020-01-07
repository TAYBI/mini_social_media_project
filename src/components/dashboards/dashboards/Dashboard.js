import React from "react";
import Notification from "./Notification";
import ProjectList from "../../projects/projects/ProjectList";

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList />
        </div>
        <div className="s12 m5 offset-m1">
          <Notification />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
