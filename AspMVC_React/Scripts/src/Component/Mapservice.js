import React, { useEffect, useState } from "react";
import { loadModules } from "esri-loader";
import { dataUpdate } from "../Store/mapService";
import { useDispatch } from "react-redux";

const Mapservice = () => {
  const dispatch = useDispatch();

  let ServiceURL =
    "http://localhost:6080/arcgis/rest/services/geoDashboard_/MapServer";

  let featureLayer =
    "http://localhost:6080/arcgis/rest/services/geoDashboard_/FeatureServer/3";

  useEffect(() => {
    loadModules(["esri/layers/MapImageLayer", "esri/layers/FeatureLayer"], {
      css: true,
    }).then(([MapImageLayer, FeatureLayer]) => {
      let MapImage = new MapImageLayer({
        url: ServiceURL,
      });

      function SubBuildTitle(feature) {
        let graphic, attributes, content;
        graphic = feature.graphic;
        attributes = graphic.attributes;

        content = `<h4 class="SubBuildTitle"  dir = "rtl" > إسم المنطقة:  ${attributes.NAME_A}</h4>`;
        return content;
      }

      // The function used for the PopupTemplate
      function getSubBuildInfo(feature) {
        let graphic, attributes, content;
        graphic = feature.graphic;
        attributes = graphic.attributes;
        content = `<table class="popupTableInfo">
     
      <tr>
        <td>اسم</td>
        <td>${attributes.NAME_A}</td>
      </tr>
      <tr>
      <td>المنطقة</td>
      <td>${attributes.PROV_NME}</td>
    </tr>
    </table>`;
        return content;
      }

      let popupTSubBuild = {
        title: SubBuildTitle,
        outFields: ["*"],
        content: getSubBuildInfo,
      };
      let SubBuildSymbol = {
        type: "simple",
        symbol: {
          type: "simple-fill",
          color: [255, 255, 0, 0.1],
          style: "backward-diagonal",
          outline: {
            width: 1,
            color: [255, 255, 0, 0.1],
            style: "solid",
          },
        },
      };

      let featureOne = new FeatureLayer({
        url: featureLayer,
        outFields: ["*"],
        popupTemplate: popupTSubBuild,
        renderer: SubBuildSymbol,
      });
      setTimeout(() => {
        window._map.add(featureOne);
        window._map.add(MapImage);

        window._areaZone = featureOne;
        window._view.on("click", function (event) {
          window._view.hitTest(event).then(function (response) {
            if (response.results.length) {
              let layerName = response.results[0].graphic.attributes.NAME_A;
              // console.log("layerName", layerName);
              dispatch(dataUpdate({ name: layerName }));
            }
          });
        });
      }, 1000);
    });
  });

  return <></>;
};

export default Mapservice;
