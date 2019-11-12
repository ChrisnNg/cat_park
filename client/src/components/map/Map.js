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

import cat_park_icon from "../../../public/cat_park_icon.png";

import "./infoWindow.css";
import "./Map_Buttons.css";
import axios from "axios";
import "./Map.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
require("dotenv").config();

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
      bgColor0: "#3f51b5",
      bgColor1: "#3f51b5",
      bgColor2: "#3f51b5",
      bgColor3: "#3f51b5",
      bgColor4: "#3f51b5",
      count: null
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

  handleHeatMapToAllCrimes = () => {
    axios
      .get(`http://localhost:8001/Data/Crimes/`)
      .then(res => {
        const crimes = res.data;
        let crimesdata = [];
        toast.info(`🚚 Loaded all crimes - ${this.state.count} records`);
        crimes.forEach((obj, index) => {
          crimesdata.push(obj.Geom);
        });
        this.setState({
          heatMapData: crimesdata,
          isHeatmapVisible: false,
          bgColor0: "#3f51b5",
          bgColor1: "#F1C40F",
          bgColor2: "#3f51b5",
          bgColor3: "#3f51b5",
          bgColor4: "#3f51b5",
          count: crimesdata.length
        });
        toast.info(`🚚 Loaded all crimes - ${this.state.count} records`);
        crimesdata = [];
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleHeatMapToTheftFromVehicle = () => {
    axios
      .get(`http://localhost:8001/Data/Crime/?crimeType=Theft%20from%20Vehicle`)
      .then(res => {
        const crimes = res.data;
        let crimesdata = [];

        crimes.forEach((obj, index) => {
          crimesdata.push(obj.Geom);
        });
        this.setState({
          heatMapData: crimesdata,
          isHeatmapVisible: false,
          bgColor0: "#3f51b5",
          bgColor1: "#3f51b5",
          bgColor2: "#F1C40F",
          bgColor3: "#3f51b5",
          bgColor4: "#3f51b5",
          count: crimesdata.length
        });
        toast.info(
          `Loaded all thefts from vehicles - ${this.state.count} records`
        );
        crimesdata = [];
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleHeatMapToTheftOfVehicle = () => {
    axios
      .get(`http://localhost:8001/Data/Crime/?crimeType=Theft%20of%20Vehicle`)
      .then(res => {
        const crimes = res.data;
        let crimesdata = [];

        crimes.forEach((obj, index) => {
          crimesdata.push(obj.Geom);
        });
        this.setState({
          heatMapData: crimesdata,
          isHeatmapVisible: false,
          bgColor0: "#3f51b5",
          bgColor1: "#3f51b5",
          bgColor2: "#3f51b5",
          bgColor3: "#F1C40F",
          bgColor4: "#3f51b5",
          count: crimesdata.length
        });
        crimesdata = [];
        toast.info(
          `🚚 Loaded all thefts of vehicles - ${this.state.count} records`
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleHeatMapToMischief = () => {
    axios
      .get(`http://localhost:8001/Data/Crime/?crimeType=Mischief`)
      .then(res => {
        const crimes = res.data;
        let crimesdata = [];

        crimes.forEach((obj, index) => {
          crimesdata.push(obj.Geom);
        });
        this.setState({
          heatMapData: crimesdata,
          isHeatmapVisible: false,
          bgColor0: "#3f51b5",
          bgColor1: "#3f51b5",
          bgColor2: "#3f51b5",
          bgColor3: "#3f51b5",
          bgColor4: "#F1C40F",
          count: crimesdata.length
        });
        crimesdata = [];
        toast.info(`🚚 Loaded mischief - ${this.state.count} records`);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleClick = (mapProps, map, clickEvent) => {
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

        this.setState({ isParkingsReady: parkingsdata });
        parkingsdata = [];
      });
  };

  handleToggle = () => {
    if (!this.state.isHeatmapVisible) {
      toast.success(`
      🗺️ Rendering ${this.state.count} records as a heat map`);
    }

    this.setState({
      isHeatmapVisible: !this.state.isHeatmapVisible,
      bgColor0: "#F1C40F"
    });
    if (this.state.bgColor0 === "#F1C40F") {
      this.setState({
        bgColor0: "#3f51b5"
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  componentDidMount(props) {
    function error(err) {
      console.warn(`Error ${err.code}: ${err.message}`);
    }
    let options = {
      enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(
      position => {
        let { latitude, longitude } = position.coords;
        // latitude = -123.114889;
        // longitude = 49.281229;
        console.log(position.coords);
        this.setState({
          currentLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      },
      error,
      options
    );
  }

  componentWillMount() {
    this.toastId = toast.info(`⌛ Loading all records of crimes`, {
      autoClose: false
    });
    axios
      .get(`http://localhost:8001/Data/Crimes/`)
      .then(res => {
        const crimes = res.data;
        let crimesdata = [];

        crimes.forEach((obj, index) => {
          crimesdata.push(obj.Geom);
        });
        this.setState({
          heatMapData: crimesdata,
          bgColor0: "#3f51b5",
          bgColor1: "#F1C40F",
          bgColor2: "#3f51b5",
          bgColor3: "#3f51b5",
          bgColor4: "#3f51b5",
          count: crimesdata.length
        });
        toast.update(this.toastId, {
          render: `⭐ Loaded all crimes - ${this.state.count} records`,
          type: toast.TYPE.SUCCESS,
          autoClose: 5000
        });
        // toast(`Loaded all crimes - ${this.state.count} records`);
      })
      .catch(function(error) {
        console.log(error);
      });

    // call to get all markeres now replaced by onclick call
    // axios
    //   .get(`http://localhost:8001/Data/Parking/`)
    //   .then(res => {
    //     const parkings = res.data;
    //     let parkingsdata = [];
    //     parkings.forEach((obj, index) => {
    //       parkingsdata.push(
    //         {
    //           position: obj["Geom"],
    //           name: obj["meterhead"]
    //         }
    //       );
    //     });
    //     this.setState({ isParkingsReady: parkingsdata });
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
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
          <Button
            onClick={this.handleToggle}
            style={{ backgroundColor: this.state.bgColor0 }}
          >
            Toggle Crime Heatmap
          </Button>
          <Button
            onClick={this.handleHeatMapToAllCrimes}
            style={{ backgroundColor: this.state.bgColor1 }}
          >
            Change to All
          </Button>
          <Button
            onClick={this.handleHeatMapToTheftFromVehicle}
            style={{ backgroundColor: this.state.bgColor2 }}
          >
            Change to Theft from car
          </Button>
          <Button
            onClick={this.handleHeatMapToTheftOfVehicle}
            style={{ backgroundColor: this.state.bgColor3 }}
          >
            Change to Theft of car
          </Button>
          <Button
            onClick={this.handleHeatMapToMischief}
            style={{ backgroundColor: this.state.bgColor4 }}
          >
            Change to Mischief
          </Button>
        </div>
        <Map
          google={google}
          crimesdata={this.state.heatMapData}
          onClick={this.handleClick}
          initialCenter={{
            lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng
          }}
          zoom={15}
        >
          <MarkerCluster
            markers={parkingMarkers}
            google={google}
            map={map}
            click={this.onMarkerClick}
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
            position={{
              lat: this.state.currentLocation.lat,
              lng: this.state.currentLocation.lng
            }}
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
        <ToastContainer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_APIKEY,
  libraries: ["visualization"]
})(MapContainer);
