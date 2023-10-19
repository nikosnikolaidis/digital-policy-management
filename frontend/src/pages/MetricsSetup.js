import React, { useState } from "react";
import "./css/MetricsSetup.css"; // Import your CSS file for styling

const MetricsSetup = () => {
  const [equation, setEquation] = useState(""); // State to store the equation
  const [newMetricName, setNewMetricName] = useState("");
  const [newMetricDescription, setNewMetricDescription] = useState("");
  const [metrics, setMetrics] = useState([
    // Your metrics data here
  ]);
  const [indicators, setIndicators] = useState([
    // Your indicators data here
  ]);

  const handleButtonClicked = (text) => {
    // Function to handle button clicks and update the equation
    setEquation((prevEquation) => prevEquation + " " + text);
  };

  const handleCreation = () => {
    // Function to create a new metric with the entered name and description
    // You can add your logic to create a metric here
    console.log("Creating metric with name:", newMetricName);
    console.log("Description:", newMetricDescription);
    // Reset the inputs
    setNewMetricName("");
    setNewMetricDescription("");
  };

  return (
    <div className="metrics-setup">
      <div className="left">
        <h3>Metrics</h3>
        {metrics.map((metric) => (
          <button key={metric.id}>{metric.name}</button>
        ))}
      </div>
      <div className="center">
        <input
          type="text"
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
          placeholder="Enter equation"
        />
        <div className="operators">
          <button onClick={() => handleButtonClicked("+")}>+</button>
          <button onClick={() => handleButtonClicked("-")}>-</button>
          <button onClick={() => handleButtonClicked("*")}>*</button>
          <button onClick={() => handleButtonClicked("/")}>/</button>
          <button onClick={() => handleButtonClicked("%")}>%</button>
          <button onClick={() => handleButtonClicked("(")}>(</button>
          <button onClick={() => handleButtonClicked(")")}>)</button>
          <button onClick={() => handleButtonClicked("^")}>^</button>
        </div>
        <input
          type="text"
          placeholder="New metric name"
          value={newMetricName}
          onChange={(e) => setNewMetricName(e.target.value)}
        />
        <input
          type="text"
          placeholder="New metric description"
          value={newMetricDescription}
          onChange={(e) => setNewMetricDescription(e.target.value)}
        />
        <button onClick={handleCreation}>Create Metric</button>
      </div>
      <div className="right">
        <h3>Indicators</h3>
        {indicators.map((indicator) => (
          <button
            key={indicator.id}
            onClick={() => handleButtonClicked(indicator.name)}
          >
            {indicator.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MetricsSetup;
