import React from "react";
import { NavLink } from "react-router-dom";

import "./App.css";

const Nav = () => {
  return (
    <nav>
      <div className="smurf-nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/smurfs">
          Smurf List
        </NavLink>
        <NavLink exact to="/add-smurf">
          Add Smurf
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
