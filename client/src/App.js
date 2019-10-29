import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";
import MaterialUiForm from "./components/Form.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to cat_park</h2>
        </div>
        <div>
          <MaterialUiForm />
        </div>
      </div>
    );
  }
}

export default App;
