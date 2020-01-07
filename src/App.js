import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layouts/layouts/NavBar";
import Dashboard from "./components/dashboards/dashboards/Dashboard";
import ProjectDetails from "./components/projects/projects/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
