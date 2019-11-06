import React, { useEffect } from "react";
import PropTypes from "prop-types";
import kitty_icon from "../../../public/kitty_icon.png";
import createMarkerClusterer from "./MarkerClusterer";
import m1 from "../../../public/m1.png";
const evtNames = [
  "click",
  "dblclick",
  "dragend",
  "mousedown",
  "mouseout",
  "mouseover",
  "mouseup",
  "recenter"
];

const markerCluster = props => {
  const { map, google, markers } = props;

  console.log("GOOGLE?", google);
  const handleEvent = ({ event, marker, entry }) => {
    if (props[event]) {
      props[event]({
        props: props,
        marker: marker,
        event: event,
        entry: entry
      });
    }
  };

  // This hook works like ComponentWillMount
  // The  hook isn't really needed, this whole thing worked without it,
  // I added the hook so that I could implement a cleanup function
  // useEffect(() => {

  const MarkerClusterer = createMarkerClusterer(google);

  console.log("AYYY LMAO", MarkerClusterer);
  console.log(markers);
  if (map && markers) {
    const mapMarkers = markers.map(marker => {
      const entry = new google.maps.Marker({
        position: {
          lat: marker.position.lat,
          lng: marker.position.lng
        },
        map: map,
        name: marker.name,
        icon: kitty_icon
      });

      evtNames.forEach(e => {
        entry.addListener(e, () =>
          handleEvent({
            event: e,
            marker: marker,
            entry: entry
          })
        );
      });

      return entry;
    });

    const clusterer = new MarkerClusterer(map, mapMarkers, {
      imagePath:
        "https://github.com/googlemaps/v3-utility-library/blob/master/markerclusterer/images/m1.png?raw=true",
      maxZoom: 20
    });

    // Clealognup function. Note, this is only returned if we create the markers
    return () => {
      //console.log('Cleaning up markers')
      clusterer.clearMarkers();
    };
  }
  // }, [map, google, markers]);

  // Do we need to render anything??
  return null;
};

markerCluster.propTypes = {
  map: PropTypes.object,
  google: PropTypes.object,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }).isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default markerCluster;
