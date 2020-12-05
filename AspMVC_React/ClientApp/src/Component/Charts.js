import React, { useEffect } from "react";
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "@esri/cedar/dist/umd/themes/amCharts/calcite.js";
import { Chart } from "@esri/cedar";

function Charts(props) {
  useEffect(() => {
    var datasets = [
      {
        url:
          "https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",
        name: "schools",
        query: {
          orderByFields: "Number_of_SUM DESC",
          groupByFieldsForStatistics: "Type",
          outStatistics: [
            {
              statisticType: "sum",
              onStatisticField: "Number_of",
              outStatisticFieldName: "Number_of_SUM",
            },
          ],
        },
      },
    ];

    var series = [
      {
        category: { field: "Type", label: "Type" },
        value: { field: "Number_of_SUM", label: "Number of Students" },
        source: "schools",
      },
    ];

    var overrides = {
      categoryAxis: {
        labelRotation: -45,
      },
    };
    //chart
    var elementId = "chart";
    var chart = new Chart(elementId, { type: "bar" })
      .datasets(datasets)
      .series(series)
      .overrides(overrides);

    // render the chart
    chart.show();

    //chart2
    var elementId2 = "chart2";
    var chart2 = new Chart(elementId2, { type: "line" })
      .datasets(datasets)
      .series(series)
      .overrides(overrides);

    // render the chart
    chart2.show();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div id="chart" style={{ height: "300px" }}></div>
          </div>
          <div className="col">
            <div id="chart2" style={{ height: "300px" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charts;
