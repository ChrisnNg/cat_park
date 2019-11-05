import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import FooterPage from "./components/Footer.js";
import MapContainer from "./components/map/Map.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HeatMapList from "./components/HeatMapList.js";

const containerStyle = { position: "relative", width: "100%", height: "90%" };

function toggleHeatmap() {
  this.setState({ isHeatmapVisible: !this.state.isHeatmapVisible });
}

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/">
          <Nav />
          {/* <HeatMapList /> */}
          <MapContainer containerStyle={containerStyle} />
          <FooterPage />
        </Route>
      </Router>
    );
  }
}

export default App;
