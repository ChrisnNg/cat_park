import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import MaterialUiForm from "./components/Form.js";
import FooterPage from "./components/Footer.js";
import AboutPage from "./components/About.js";
import Mapping from "./components/Map.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <AboutPage />
        <div id="add-location-form">
          <MaterialUiForm />
        </div>
        <div id="map">
          <Mapping />
        </div>
        <div id="footer-id">
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default App;
