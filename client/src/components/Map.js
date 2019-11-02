import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import MapStyles from "./MapStyles";

function Map() {
  const [latLng, setLatLng] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      console.log("longitude", longitude);
      console.log("latitude", latitude);
      setLatLng({ lat: latitude, lng: longitude });
    });
  }, []);

  console.log("current latlng", latLng);

  return (
    <div>
      {latLng ? (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={latLng}
          defaultOptions={{ styles: MapStyles }}
          onClick={e => {
            const { lat, lng } = e.latLng;
            console.log("current", e);
            setLatLng({ lat: lat(), lng: lng() });
          }}
        >
          <Marker position={latLng} />
        </GoogleMap>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
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
