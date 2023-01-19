import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Portfolio</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <button className="n-button">Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
