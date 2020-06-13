import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import SingUp from "./components/pages/SingUp";
import Post from "./components/posts/Post";
import _404 from "./components/pages/404";
import NavBar from "./components/common/NavBar";
import PostDetails from "./components/posts/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SingUp} />
          <Route exact path="/newpost" component={Post} />
          <Route exact path="/post" component={PostDetails} />
          <Route component={_404} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
