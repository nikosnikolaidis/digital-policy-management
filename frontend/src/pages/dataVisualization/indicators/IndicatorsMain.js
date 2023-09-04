import React, { useState } from "react";
import Indicator from "./Indicator"; // Import the Indicator component
import "./css/IndicatorsMain.css";

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

const IndicatorsMain = ({ data }) => {
  // Initialize state to track which indicator is expanded
  const [expandedIndicatorId, setExpandedIndicatorId] = useState(null);

  // Function to toggle the expanded state of an indicator
  const toggleIndicator = (indicatorId) => {
    setExpandedIndicatorId((prevId) =>
      prevId === indicatorId ? null : indicatorId
    );
  };

  return (
    <div>
      {data.map((indicator_component) => (
        <div className={"indicator_component_panel"}>
          <div
            key={indicator_component.indicator_name}
            onClick={() => toggleIndicator(indicator_component.indicator_name)}
            className={`indicator-button ${
              expandedIndicatorId === indicator_component.indicator_name
                ? "active"
                : ""
            }`}
          >
            {indicator_component.indicator_name}
          </div>
          {expandedIndicatorId === indicator_component.indicator_name && (
            <Indicator jsonData={indicator_component.indicator_data} />
          )}
        </div>
      ))}
    </div>
  );
};

export default IndicatorsMain;
