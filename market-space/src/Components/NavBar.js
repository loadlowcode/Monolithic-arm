import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li className = 'logo'>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/star">Star</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  );
};

export default NavBar;
