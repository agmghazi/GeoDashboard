import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";
import { dataUpdate } from "../Store/mapService";
import { useDispatch } from "react-redux";

const WebMapView = () => {
  const mapRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    loadModules(["esri/Map", "esri/views/MapView", "esri/request"], {
      css: true,
    }).then(([ArcGISMap, MapView, Request]) => {
      const map = new ArcGISMap({
        basemap: "satellite",
      });
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [50.036025597706605, 26.38306796977186], // longitude, latitude
        zoom: 5,
      });
      view.watch("zoom", function (zoomVal) {
        // console.log("zoom level: ", zoomVal);
        GetSpatialZone(
          "http://localhost:6080/arcgis/rest/services/geoDashboard_/FeatureServer/3/query"
        );
      });

      window._view = view;
      window._map = map;

      return () => {
        if (view) {
          // destroy the map view
          view.destroy();
        }
      };
      function GetSpatialZone(url) {
        let requestOptions = {
          responseType: "json",
          query: {
            f: "json",
            where: "1=1",
            geometry: JSON.stringify(window._view.extent),
            geometryType: "esriGeometryEnvelope",
            spatialRel: "esriSpatialRelIntersects",
            outFields: "*",
            inSR: JSON.stringify(window._view.spatialReference),
            returnGeometry: true,
          },
        };
        Request(url, requestOptions).then(function (response) {
          if (response.data.features.length <= 1) {
            console.log(response.data.features[0].attributes.NAME_A);
            let layerName = response.data.features[0].attributes.NAME_A;
              dispatch(dataUpdate({ layerName: layerName }));
          }
        });
      }
    });
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
