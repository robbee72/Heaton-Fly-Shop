import React from "react";
import { NavLink } from "react-router-dom";

const DiningPage = () => (
  <div className="box-layout__about">
    <div className="box-layout__box">
      <div className="content-container">
        <NavLink className="header__title" to="/" />
        <h1>le Cafe des Grille</h1>
        <p>Chef Barasso from breafast to Last night dining.</p>
      </div>
    </div>
  </div>
);

export default DiningPage;
