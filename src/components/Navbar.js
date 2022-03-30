import React, { useState } from "react";
//Styling
import "./Navbar.css";

function Navbar() {
  //Using state to toggle active class of navbarLinks
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="navbarLogo" />
      <a href="#" className="toggleButton" onClick={toggleActive}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={active ? "navbarLinks" : "navbarLinks active"}>
        <ul>
          <li>
            <a href="#">Logout</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
