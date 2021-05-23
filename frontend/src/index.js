import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ShopPage } from "./components/Pages/Shop/ShopPage";
import { BrandPage } from "./components/Pages/Brand/BrandPage";
import { NavigationBar } from "./components/Pages/Navbar/NavigationBar";
import { HomePage } from "./components/Pages/Home/HomePage";

const rootElement = document.getElementById("root");


ReactDOM.render(
  <Router>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/Brand" component={BrandPage} />
      <Route path="/Shop" component={ShopPage} />
    </Switch>
  </Router>,
  rootElement
);


reportWebVitals();
