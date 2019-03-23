import React, { Component } from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <a className="logo" href="#">
        TNL
      </a>
      <div className="menu">
        <a className="menu-item" href="#">
          Why Us
        </a>
        |
        <a className="menu-item" href="#">
          Our Services
        </a>
        |
        <a className="menu-item" href="#">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Navbar;
