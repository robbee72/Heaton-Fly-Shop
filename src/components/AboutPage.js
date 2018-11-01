import React from "react";
import { NavLink } from "react-router-dom";

const AboutPage = () => (
  <div className="box-layout__about">
    <div className="box-layout__box">
      <div className="content-container">
        <NavLink className="header__title" to="/" />
        <h1>About US</h1>
        <p>Colorado Fly Shop for Everyone.</p>
      </div>
    </div>
  </div>
);

export default AboutPage;
