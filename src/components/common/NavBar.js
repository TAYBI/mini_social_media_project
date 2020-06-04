import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">home</Link>|<Link to="/profile">profile</Link>|
      <Link to="/login">login</Link>|<Link to="/signup">sign up</Link>|
      <Link to="/newpost">add new post</Link>
    </div>
  );
};

export default NavBar;
