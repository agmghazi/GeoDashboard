import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

const WebMapView = () => {
  const mapRef = useRef();

  useEffect(() => {
    loadModules(["esri/Map", "esri/views/MapView"], { css: true }).then(
      ([ArcGISMap, MapView]) => {
        const map = new ArcGISMap({
          basemap: "satellite",
        });
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [50.036025597706605, 26.38306796977186], // longitude, latitude
          zoom: 5,
        });
        // view.watch("zoom", function (zoomVal) {
        //   // console.log("zoom level: ", zoomVal);
        // });

        window._view = view;
        window._map = map;

        return () => {
          if (view) {
            // destroy the map view
            view.destroy();
          }
        };
      }
    );
  });

  return (
    <div
      style={{
        width: "100vx",
        zIndex: "-1",
        height: "100vh",
        paddingRight: "8px",
      }}
      ref={mapRef}
    />
  );
};

export default WebMapView;
