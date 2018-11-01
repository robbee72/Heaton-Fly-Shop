import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <h1 className="header__title">Heaton Fly Shop</h1>
        <div>
          <NavLink to="/home" activeClassName="is-active">
            Home
          </NavLink>
          <br />
          <NavLink to="/contact" activeClassName="is-active">
            Contact
          </NavLink>
          <br />
          <NavLink to="/about" activeClassName="is-active">
            About
          </NavLink>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
