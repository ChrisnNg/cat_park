import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import MaterialUiForm from "./components/Form.js";
import FooterPage from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div id="add-location-form">
          <MaterialUiForm />
        </div>
        <div id="footer-id">
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default App;
