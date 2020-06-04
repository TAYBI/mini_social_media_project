import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import SingUp from "./components/pages/SingUp";
import Post from "./components/pages/Post";
import _404 from "./components/pages/404";
import NavBar from "./components/common/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SingUp} />
        <Route exact path="/newpost" component={Post} />
        <Route component={_404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
