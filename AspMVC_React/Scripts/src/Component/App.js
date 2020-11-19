import React from "react";
import SplitPane, { Pane } from "react-split-pane";
import WebMapView from "./WebMapView";
import Mapservice from "./Mapservice";
import Widgets from "./Widgets";
import GetDataFromMap from "./GetDataFromMap";

export default function App() {
  return (
    <div>
      <SplitPane split="vertical">
        <div>
          <WebMapView />
          <Mapservice />
          <Widgets />
        </div>
        <div>
          <GetDataFromMap />
        </div>
      </SplitPane>
    </div>
  );
}
