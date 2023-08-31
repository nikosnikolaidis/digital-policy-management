import React, { useState } from "react";
import "./css/DataVisualization.css"; // Import the CSS file with your custom styles
import MetricsGraph from "./MetricsGraph";

const DataVisualization = ({ data, onDataAdd }) => {
  const [selectedPair, setSelectedPair] = useState(null);
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newGraphData, setNewGraphData] = useState("");

  const handlePairClick = (pair) => {
    setSelectedPair(pair);
  };

  const handleAddNew = () => {
    const newData = {
      key: newKey,
      value: newValue,
      graphData: JSON.parse(newGraphData),
    };
    onDataAdd(newData);
    setNewKey("");
    setNewValue("");
    setNewGraphData("");
  };

  return (
    <div>
      {data.map((pair, index) => (
        <div key={index} className="pair-container">
          <div className="pair" onClick={() => handlePairClick(pair)}>
            <span className="key">{pair.key}:</span>
            <span className="value">{pair.value}</span>
          </div>
          {selectedPair === pair && <MetricsGraph graphData={pair.graphData} />}
        </div>
      ))}

      {/* add new key-pair-data entry to list */}
      <div className="add-new-container">
        <button className="add-new-button" onClick={handleAddNew}>
          Add New
        </button>
        <div className="add-new-form">
          <input
            type="text"
            placeholder="Key"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
          />
          <input
            type="text"
            placeholder="Value"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <textarea
            placeholder="Graph Data (JSON format)"
            value={newGraphData}
            onChange={(e) => setNewGraphData(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
