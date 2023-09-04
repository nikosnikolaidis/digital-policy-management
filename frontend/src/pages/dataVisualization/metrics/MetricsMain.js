import React, { useState } from "react";
import Metric from "./Metric"; // Import the Metric component
import "./css/MetricsMain.css";

/* 
data format:
 data: [
    {
      indicator_name: "Number of papers"
      indicator_data: []
    },
    ...
  ]


data format:
 data: [
    {
      indicator_name: "Number of papers"
      indicator_data: [
          {
            id: 4,
            date: "2023-12-20T12:00:00.000",
            indicator: {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
            value: 10.0,
          },
          {
            id: 6,
            date: "2023-12-21T12:00:00.000",
            indicator: {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
            value: 30.0,
          },
          ....
        ]
    },
    ...
 ]
*/

const MetricsMain = ({ data }) => {
  // Initialize state to track which Metric is expanded
  const [expandedMetricId, setExpandedMetricId] = useState(null);

  // Function to toggle the expanded state of an Metric
  const toggleMetric = (metricId) => {
    console.log("pressed --> " + metricId);
    setExpandedMetricId((prevId) => (prevId === metricId ? null : metricId));
  };

  return (
    <div>
      {data.map((metric_component) => (
        <div className={"metric_component_panel"}>
          <div
            key={metric_component.metric_name}
            onClick={() => toggleMetric(metric_component.metric_name)}
            className={`metric-button ${
              expandedMetricId === metric_component.metric_name ? "active" : ""
            }`}
          >
            {metric_component.metric_name}
          </div>
          {expandedMetricId === metric_component.metric_name && (
            <Metric data={metric_component.metric_data} />
          )}
        </div>
      ))}
    </div>
  );
};

export default MetricsMain;
