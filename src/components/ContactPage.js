import React from "react";
import { NavLink } from "react-router-dom";

const ContactPage = () => (
  <div className="box-layout__contact">
    <div className="box-layout__box">
      <div className="content-container">
        <NavLink className="header__title" to="/" />
        <h1>Contact Me</h1>
        <p>You can reach me at test@gmail.com</p>
      </div>
    </div>
  </div>
);

export default ContactPage;
