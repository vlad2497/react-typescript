import React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper teal darken-3">
        <div className="container">
          <a href="/" className="brand-logo">
            React/Typescript
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Список</NavLink>
            </li>
            <li>
              <NavLink to="/about">Информация</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
