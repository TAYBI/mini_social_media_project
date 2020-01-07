import React from "react";
import { NavLink } from "react-router-dom";

function SingInLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue-grey ">
          BT
        </NavLink>
      </li>
    </ul>
  );
}

export default SingInLinks;
