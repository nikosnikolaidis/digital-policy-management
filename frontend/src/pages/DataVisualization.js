import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../DataVisualization.css"; // Import the CSS file with your custom styles

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
          {selectedPair === pair && (
            <div className="graph-container">
              <LineChart
                width={800}
                height={400}
                data={pair.graphData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </div>
          )}
        </div>
      ))}
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
