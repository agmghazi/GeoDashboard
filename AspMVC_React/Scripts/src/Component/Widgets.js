import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

const Widgets = () => {
  useEffect(() => {
    loadModules(
      [
        "esri/widgets/ScaleBar",
        "esri/widgets/Home",
        "esri/widgets/Compass",
        "esri/widgets/Expand",
        "esri/widgets/Sketch",
        "esri/widgets/AreaMeasurement2D",
        "esri/widgets/DistanceMeasurement2D",
        "esri/widgets/CoordinateConversion",
        "esri/widgets/BasemapToggle",
      ],
      { css: true }
    ).then(
      ([
        ScaleBar,
        Home,
        Compass,
        Expand,
        Sketch,
        AreaMeasurement2D,
        DistanceMeasurement2D,
        CoordinateConversion,
        BasemapToggle,
      ]) => {
        const homeWidget = new Home({
          view: window._view,
        });
        const compass = new Compass({
          view: window._view,
        });

        const scaleBar = new ScaleBar({
          view: window._view,
          unit: "metric",
          style: "ruler",
        });

        const sketch = new Sketch({
          layer: window._layer,
          view: window._view,
          creationMode: "update",
        });
        const sketchExpand = new Expand({
          expandIconClass: "esri-icon-sketch-rectangle",
          expandTooltip: "أدوات الرسم",
          view: window._view,
          content: sketch,
          mode: "floating",
        });

        let AreameasurementWidget = new AreaMeasurement2D({
          view: window._view,
        });
        let AreameasurementExpand = new Expand({
          expandIconClass: "esri-icon-measure-area",
          expandTooltip: "قياس مساحات",
          view: window._view,
          content: AreameasurementWidget,
          mode: "floating",
        });

        let DistanceWidget = new DistanceMeasurement2D({
          view: window._view,
        });
        const DistanceExpand = new Expand({
          expandIconClass: "esri-icon-measure-line",
          expandTooltip: "قياس مسافات",
          view: window._view,
          content: DistanceWidget,
          mode: "floating",
        });

        const CoordinateWidget = new CoordinateConversion({
          view: window._view,
        });
        const CoordinateExpand = new Expand({
          expandIconClass: "esri-icon-tracking",
          expandTooltip: "الاحداثيات",
          view: window._view,
          content: CoordinateWidget,
          mode: "floating",
          expanded: false,
        });

        const basemapToggle = new BasemapToggle({
          view: window._view,
          nextBasemap: "topo",
        });

        window._view.ui.move([
          {
            component: "zoom",
            position: "top-left",
            index: 3,
          },
        ]);

        window._view.ui.add([
          {
            component: homeWidget,
            position: "top-left",
            index: 2,
          },
          {
            component: compass,
            position: "top-left",
            index: 4,
          },
          {
            component: scaleBar,
            position: "bottom-left",
            index: 2,
          },
          {
            component: sketchExpand,
            position: "top-left",
            index: 5,
          },

          {
            component: AreameasurementExpand,
            position: "top-left",
            index: 7,
          },
          {
            component: DistanceExpand,
            position: "top-left",
            index: 8,
          },
          {
            component: CoordinateExpand,
            position: "bottom-right",
            index: 2,
          },
          {
            component: basemapToggle,
            position: "top-right",
            index: 0,
          },
        ]);
      }
    );
  });

  return <> </>;
};

export default Widgets;
