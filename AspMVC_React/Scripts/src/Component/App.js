import React from "react";
import SplitPane, { Pane } from "react-split-pane";
import WebMapView from "./WebMapView";

export default function App() {
  return (
    <div>
      <SplitPane split="vertical">
        <div>
          <WebMapView />
        </div>
        <div>
          <h1 className="addH1">data here</h1>
        </div>
      </SplitPane>
    </div>
  );
}
