import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

const WebMapView = () => {
  const mapRef = useRef();

  useEffect(() => {
    // // lazy load the required ArcGIS API for JavaS cript modules and CSS
    loadModules(["esri/Map", "esri/views/MapView"], { css: true }).then(
      ([ArcGISMap, MapView]) => {
        const map = new ArcGISMap({
          basemap: "topo-vector",
        });
        // load the map view at the ref's DOM node
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [-118, 34],
          zoom: 8,
        });
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
      style={{ width: "100vx", zIndex: "-1", height: "100vh" }}
      ref={mapRef}
    />
  );
};

export default WebMapView;
