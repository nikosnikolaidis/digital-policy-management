import React, { useState } from "react";
import "./css/MetricsDataList.css";

const MetricsDataList = ({ graphData }) => {
  const [metricData, setMetricData] = useState(graphData);
  const [newTime, setNewTime] = useState("");
  const [newValue, setNewValue] = useState("");

  const handleModify = (index) => {
    // TODO Implement modify functionality
  };

  const handleDelete = (index) => {
    const newData = metricData.filter((_, i) => i !== index);
    setMetricData(newData);
  };

  const handleAddNew = () => {
    const newItem = { time: newTime, value: parseFloat(newValue) };
    setMetricData([...metricData, newItem]);
    setNewTime("");
    setNewValue("");
  };

  return (
    <div class="interaction-box">
      <ul>
        {metricData.map((item, index) => (
          <li key={index}>
            <p>Time:</p> {item.time}<p>, Value:</p> {item.value}
            <button onClick={() => handleModify(index)}>Modify</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Add New Item</h3>
        <input
          type="text"
          placeholder="Time"
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button onClick={handleAddNew}>Add New</button>
      </div>
    </div>
  );
};

export default MetricsDataList;
