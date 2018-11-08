import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => (
  <footer className="footer">
    <div className="content-container">
      <div className="footer__content">
        <div>
          <ul>
            <li>
              <NavLink to="/about" activeClassName="is-active">
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="is-active">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
