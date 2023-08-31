import React, { useState } from "react";
import "./css/PairListWithTabs.css";
import MetricsGraph from "./MetricsGraph";
import MetricsDataList from "./MetricsDataList";

const PairListWithTabs = ({ data }) => {
  const [selectedPair, setSelectedPair] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Graph");

  const handlePairClick = (pair) => {
    if (selectedPair === pair) {
      setSelectedPair(null); // Collapse if the same pair is clicked again
    } else {
      setSelectedPair(pair);
      setSelectedTab("Graph"); // Reset selected tab to "Graph" when a new pair is clicked
    }
  };

  const toggleTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      {data.map((pair, index) => (
        <div key={index} className="pair-container">
          <div className="pair" onClick={() => handlePairClick(pair)}>
            <span className="key">{pair.key}:</span>
            <span className="value">{pair.value}</span>
            <span
              className={`tab ${selectedTab === "Graph" ? "active" : ""}`}
              onClick={() => toggleTab("Graph")}
            >
              Graph
            </span>
            <span
              className={`tab ${selectedTab === "Data" ? "active" : ""}`}
              onClick={() => toggleTab("Data")}
            >
              Data
            </span>
          </div>
          {selectedPair === pair && (
            <div className="content">
              {selectedTab === "Graph" ? (
                <MetricsGraph graphData={pair.graphData} />
              ) : (
                <MetricsDataList graphData={pair.graphData} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PairListWithTabs;
