import React from "react";
import { NavLink } from "react-router-dom";

function SingOutLink() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Sign UP</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log In</NavLink>
      </li>
    </ul>
  );
}
export default SingOutLink;
