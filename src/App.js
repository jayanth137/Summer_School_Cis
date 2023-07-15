import React, {
  Component
} from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from "./home";

import "./App.css";
import ScrollToTop from "./ScrollToTop";

export default class App extends Component {
  render() {
      return ( <BrowserRouter>
          <ScrollToTop/>
          <Routes>
          < Route path = "/"  element = {<Home/> }/> 
          </Routes> 
      </BrowserRouter>
      );
  }
}