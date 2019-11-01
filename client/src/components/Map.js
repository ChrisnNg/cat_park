import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import MapStyles from "./MapStyles";

function Map() {
  let current = navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);
  });

  const [lat, setLat] = useState(49.246292);
  const [lng, setLng] = useState(-123.116226);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: position.coords.latitude, lng: -123.116226 }}
      defaultOptions={{ styles: MapStyles }}
      onClick={e => {
        console.log(current);
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
    <div style={{ width: "100vw", height: "90vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDtxaSuJXHA5QJ7MMVxdQ-sQyLfaj01eJ4`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
