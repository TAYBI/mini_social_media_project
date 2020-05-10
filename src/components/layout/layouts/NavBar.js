import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLink from "./SignedOutLink";

function NavBar() {
  return (
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        {/* <Link to="/" className="brand-logo">
          Mario Plan
        </Link> */}
        <SignedInLinks />
        <SignedOutLink />
      </div>
    </nav>
  );
}

export default NavBar;
