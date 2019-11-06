import React from "react";
import {
  HeatMap,
  GoogleApiWrapper,
  InfoWindow,
  Marker
} from "google-maps-react";

import Button from "react-bootstrap/Button";

// import HeatMap from "./HeatMap.js"
import CurrentLocation from "./CurrentLocation";
import cat_park_icon from "../../../public/cat_park_icon.png";
import kitty_icon from "../../../public/kitty_icon.png";
import "./infoWindow.css";
import "./Map_Buttons.css";
import axios from "axios";

const gradient = [
  "rgba(0, 255, 255, 0)",
  "rgba(0, 255, 255, 1)",
  "rgba(0, 191, 255, 1)",
  "rgba(0, 127, 255, 1)",
  "rgba(0, 63, 255, 1)",
  "rgba(0, 0, 255, 1)",
  "rgba(0, 0, 223, 1)",
  "rgba(0, 0, 191, 1)",
  "rgba(0, 0, 159, 1)",
  "rgba(0, 0, 127, 1)",
  "rgba(63, 0, 91, 1)",
  "rgba(127, 0, 63, 1)",
  "rgba(191, 0, 31, 1)",
  "rgba(255, 0, 0, 1)"
];

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
      heatMapData: [
        { lat: 37.752986, lng: -122.40311199999996 },
        { lat: 37.751266, lng: -122.40335500000003 },
        { lat: 37.751266, lng: -122.40335500000003 }
      ],
      isHeatmapVisible: false,
      isParkingsReady: false
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  handleToggle = () => {
    this.setState({ isHeatmapVisible: !this.state.isHeatmapVisible });
  };

  componentWillMount() {
    axios.get(`http://localhost:8001/Data/Crime/`).then(res => {
      const crimes = res.data;
      let crimesdata = [];

      crimes.forEach((obj, index) => {
        crimesdata.push(obj.Geom);
      });
      this.setState({ heatMapData: crimesdata });
    });

    axios.get(`http://localhost:8001/Data/Parking/`).then(res => {
      const parkings = res.data;
      let parkingsdata = [];
      let google = this.props.google;
      parkings.forEach((obj, index) => {
        parkingsdata.push(
          <Marker
            key={index}
            name={obj["meterhead"]}
            position={obj["Geom"]}
            onClick={this.onMarkerClick}
            icon={{
              url: kitty_icon,
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(14, 22)
            }}
          />
        );
      });

      this.setState({ isParkingsReady: parkingsdata });
    });
  }

  render() {
    let map = (
      <HeatMap
        gradient={gradient}
        positions={this.state.heatMapData}
        opacity={1}
        radius={20}
      />
    );

    let google = this.props.google;
    let parkingMarkers = this.state.isParkingsReady;
    return (
      <div className="map-container">
        <div id="floating-panel">
          <Button onClick={this.handleToggle}>Toggle Crime Heatmap</Button>
        </div>
        <CurrentLocation
          google={this.props.google}
          crimesdata={this.state.heatMapData}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Current Location"}
            icon={{
              url: cat_park_icon,
              anchor: new google.maps.Point(32, 32)
            }}
          />
          <Marker
            name={"Test Marker"}
            position={{ lat: 49.280385, lng: -123.096307 }}
            onClick={this.onMarkerClick}
            icon={{
              url: kitty_icon
            }}
          />
          <Marker
            name={this.state.string}
            position={{ lat: 49.280485, lng: -123.096307 }}
            onClick={this.onMarkerClick}
            icon={{
              url: kitty_icon
            }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h4 className="text-center info-window">
                {this.state.selectedPlace.name}
              </h4>
            </div>
          </InfoWindow>
          {this.state.isHeatmapVisible ? map : null}
          {this.state.isParkingsReady ? parkingMarkers : null}
        </CurrentLocation>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBwQh_n8MYTnuJxA3ZGCDtvbWwjaXoIYKo",
  libraries: ["visualization"]
})(MapContainer);
