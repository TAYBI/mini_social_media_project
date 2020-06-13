import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">home</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/login">login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">sign up</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/newpost">⊕ new post</Link>
            </Nav.Link>
          </Nav>
          <Nav inline>
            <Nav.Link>
              <Link to="/profile">profile</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">home</Link>|<Link to="/profile">profile</Link>|
      <Link to="/login">login</Link>|<Link to="/signup">sign up</Link>|
      <Link to="/newpost">add new post</Link> */}
    </>
  );
};

export default NavBar;
