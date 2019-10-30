import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import MaterialUiForm from "./components/Form.js";
import FooterPage from "./components/Footer.js";
import AboutPage from "./components/About.js";
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <AboutPage />
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
