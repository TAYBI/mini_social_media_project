import React from "react";
import { NavLink } from "react-router-dom";

function SingOutLink() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Sign UP</NavLink>
      </li>
      <li>
        <NavLink to="/">Log In</NavLink>
      </li>
    </ul>
  );
}
export default SingOutLink;
