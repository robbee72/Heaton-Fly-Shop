import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import HotelPage from "../components/HotelPage";
import DiningPage from "../components/DiningPage";
import ShopPage from "../components/ShopPage";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";
import AboutPage from "../components/AboutPage";
import MouseyPage from "../components/MouseyPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/hotel" component={HotelPage} />
        <Route path="/dining" component={DiningPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/mousey" component={MouseyPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
