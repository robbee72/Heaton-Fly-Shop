import React from "react";
import { NavLink } from "react-router-dom";

const ShopPage = () => (
  <div className="box-layout__shop">
    <div className="box-layout__box">
      <div className="content-container">
        <NavLink className="header__title" to="/" />
        <h1>The Fly Shop</h1>
        <p>The Art of Fly Fishing</p>
      </div>
    </div>
  </div>
);

export default ShopPage;
