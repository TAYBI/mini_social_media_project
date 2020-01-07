import React from "react";
import { Link } from "react-router-dom";
import SingInLinks from "./SingInLinks";
import SingOutLink from "./SingOutLink";

function NavBar() {
  return (
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">
          Mario Plan
        </Link>
        <SingInLinks />
        <SingOutLink />
      </div>
    </nav>
  );
}

export default NavBar;
