import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";

import { Theme } from './components/utils/Theme'
import { ShopPage } from "./components/Pages/Shop/ShopPage";
import { BrandPage } from "./components/Pages/Brand/BrandPage";
import { BrandDetail } from "./components/Pages/Brand/BrandDetail";
import { BrandAdd } from "./components/Pages/Brand/BrandAdd";
import { NavigationBar } from "./components/Pages/Navbar/NavigationBar";
import { HomePage } from "./components/Pages/Home/HomePage";

const rootElement = document.getElementById("root");

const Root = styled.div`
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: ${props => Theme.bgPrimary};
`;

ReactDOM.render(
  <Router>
    <Root>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Brand" component={BrandPage} />
        <Route path="/BrandAdd" component={BrandAdd} />
        <Route path="/Brands/:id" component={BrandDetail} />
        <Route path="/Shop" component={ShopPage} />
      </Switch>
    </Root>
  </Router>,
  rootElement
);


reportWebVitals();
