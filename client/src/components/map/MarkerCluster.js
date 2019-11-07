import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import kitty_icon from "../../../public/kitty_park_2.png";
import createMarkerClusterer from "./MarkerClusterer";

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
  const { map, google, markers, rerender } = props;

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

  const [clusterer, setClusterer] = useState(null);
  const MarkerClusterer = createMarkerClusterer(google);

  useEffect(() => {
    if (map) {
      // first state
      // do not load clusters
      // do not clear

      // second state
      // load clusers
      // do not clear

      // third state
      // clear clusters that are already created
      // load clusters

      const _clusterer = new MarkerClusterer(map, [], {
        imagePath:
          "https://github.com/googlemaps/v3-utility-library/blob/master/markerclusterer/images/m2.png?raw=true",
        maxZoom: 18
      });

      setClusterer(_clusterer);

      // const allClusters = [];
      // allClusters.push(clusterer);
      // setTimeout(() => {
      //   console.log("allclusters=", allClusters);
      //   // clusterer.clearMarkers();
      // }, 3000);

      // console.log("rerender", rerender);
      // if (rerender) {
      //   console.log("clear marker triggered");
      //   clusterer.clearMarkers();
      // }

      // Clealognup function. Note, this is only returned if we create the markers
      // return () => {
      //   console.log("Cleaning up markers");
      //   clusterer.clearMarkers();
      // };
    }
  }, [map]);

  useEffect(() => {
    if (clusterer && markers) {
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

      clusterer.clearMarkers();
      clusterer.addMarkers(mapMarkers);
    }
  }, [markers]);

  // This hook works like ComponentWillMount
  // The  hook isn't really needed, this whole thing worked without it,
  // I added the hook so that I could implement a cleanup function
  // useEffect(() => {

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
