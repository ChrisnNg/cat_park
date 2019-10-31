import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import MaterialUiForm from "./components/Form.js";
import FooterPage from "./components/Footer.js";
import AboutPage from "./components/About.js";
import Mapping from "./components/Map.js";
import Axios from "axios";

Axios.get(process.env.REACT_APP_URL);

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <Nav />
            <div id="map">
              <Mapping />
            </div>
            <div id="footer-id">
              <FooterPage />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
