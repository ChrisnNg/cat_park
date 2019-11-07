import React from "react";
import {
  HeatMap,
  GoogleApiWrapper,
  InfoWindow,
  Marker,
  Map
} from "google-maps-react";

import Button from "react-bootstrap/Button";
import MarkerCluster from "./MarkerCluster";
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
      isParkingsReady: false,
      currentLocation: { lat: 59.281229, lng: -123.114889 },
      loading: true,
      rerender: true
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

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  handleClick = (mapProps, map, clickEvent) => {
    console.log("clickyhandleclicky");
    console.log(mapProps);
    console.log(map);
    console.log(clickEvent.latLng.lat(), clickEvent.latLng.lng());
    console.log(this.props);

    axios
      .get(
        `http://localhost:8001/Data/Parking/?lng=${clickEvent.latLng.lng()}&lat=${clickEvent.latLng.lat()}`
      )
      .then(res => {
        const parkings = res.data;
        let parkingsdata = [];

        parkings.forEach((obj, index) => {
          parkingsdata.push({
            position: obj["Geom"],
            name: obj["meterhead"]
          });
        });
        console.log(parkingsdata.length);
        this.setState({ isParkingsReady: parkingsdata });
        parkingsdata = [];
        this.setState({ rerender: !this.state.rerender });
        console.log("current state", this.state.rerender);
      });
  };

  handleToggle = () => {
    this.setState({ isHeatmapVisible: !this.state.isHeatmapVisible });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        let { latitude, longitude } = position.coords;
        // latitude = -123.114889;
        // longitude = 49.281229;
        console.log("current loc", latitude, longitude);
        console.log("accur", position);
        this.setState({
          currentLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  componentWillMount() {
    axios
      .get(`http://localhost:8001/Data/Crime/?crimeType=Mischief`)
      .then(res => {
        const crimes = res.data;
        let crimesdata = [];

        crimes.forEach((obj, index) => {
          crimesdata.push(obj.Geom);
        });
        this.setState({ heatMapData: crimesdata });
      })
      .catch(function(error) {
        console.log(error);
      });

    axios.get(`http://localhost:8001/Data/Parking/`).then(res => {
      const parkings = res.data;
      let parkingsdata = [];
      let google = this.props.google;
      parkings.forEach((obj, index) => {
        parkingsdata.push(
          // <Marker
          //   key={index}
          //   name={obj["meterhead"]}
          //   position={obj["Geom"]}
          //   onClick={this.onMarkerClick}
          //   icon={{
          //     url: kitty_icon,
          //     scaledSize: new google.maps.Size(14, 22)
          //   }}
          //   animation={this.props.google.maps.Animation.DROP}
          // />

          {
            position: obj["Geom"],
            name: obj["meterhead"]
          }
        );
      });

      this.setState({ isParkingsReady: parkingsdata });
    });
  }

  render() {
    const { loading, currentLocation } = this.state;

    if (loading) {
      return null;
    }

    // console.log("cluster this!", <markerCluster />);
    let map = (
      <HeatMap
        gradient={gradient}
        positions={this.state.heatMapData}
        opacity={1}
        radius={20}
      />
    );

    let google = this.props.google;
    let parkingMarkers = this.state.isParkingsReady
      ? this.state.isParkingsReady
      : [];

    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className="map-container">
        <div id="floating-panel">
          <Button onClick={this.handleToggle}>Toggle Crime Heatmap</Button>
        </div>
        <Map
          google={google}
          crimesdata={this.state.heatMapData}
          onClick={this.handleClick}
          initialCenter={{
            lat: 49.2812874,
            lng: -123.114984
          }}
        >
          <MarkerCluster
            markers={parkingMarkers}
            google={google}
            rerender={this.state.rerender}
            // click={this.onMarkerClick}
            // mouseover={this.onMouseOver}
            // mouseout={this.onMouseOut}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={"Current Location"}
            icon={{
              url: cat_park_icon
            }}
            animation={this.props.google.maps.Animation.BOUNCE}
          />
          {/* <Marker
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
          /> */}
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
          {/* {this.state.isParkingsReady ? parkingMarkers : null} */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBwQh_n8MYTnuJxA3ZGCDtvbWwjaXoIYKo",
  libraries: ["visualization"]
})(MapContainer);
