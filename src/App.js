import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/layouts/NavBar";
import Dashboard from "./components/dashboards/dashboards/Dashboard";
import ProjectDetails from "./components/projects/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/projects/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/newproject" component={CreateProject} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
