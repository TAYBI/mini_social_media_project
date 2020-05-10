import React from "react";
import Notification from "./Notification";
import ProjectList from "../../projects/projects/ProjectList";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const { Projects } = props;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={Projects} />
          </div>
          <div className="s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
