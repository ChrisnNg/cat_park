import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const [lat, setLat] = useState(49.246292);
  const [lng, setLng] = useState(-123.116226);

  function handleClick(event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    console.log("inside handleClick");
    console.log(lat, lng);
  }

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 49.246292, lng: -123.116226 }}
      onClick={e => {
        setLat(e.latLng.lat());
        setLng(e.latLng.lng());
      }}
    >
      <Marker position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDtxaSuJXHA5QJ7MMVxdQ-sQyLfaj01eJ4`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
