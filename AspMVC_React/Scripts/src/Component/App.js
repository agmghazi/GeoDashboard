import React, { useEffect } from "react";
import SplitPane, { Pane } from "react-split-pane";
import WebMapView from "./WebMapView";
import Mapservice from "./Mapservice";
import Widgets from "./Widgets";
import Mapsearch from "./MapSearch";
import GetDataFromMap from "./GetDataFromMap";
import Charts from "./Charts";

export default function App() {
  useEffect(() => {
    // side effects
    function Resize() {}

    // cleanup
    return () => {};
  }, []);
  return (
    <div>
      {/* <button className="btn btn-primary" id="btnResize">
        Resize
      </button> */}
      <SplitPane split="vertical" defaultSize={200} primary="second">
        <div>
          <WebMapView />
          <Mapservice />
          <Widgets />
          <Mapsearch />
        </div>
        <div>
          <GetDataFromMap />
          <Charts />
        </div>
      </SplitPane>
    </div>
  );
}
