import React, { useState } from "react";
import "../css/MetricDataList.css"; // Import the CSS file with your custom styles

const MetricDataList = () => {
  const initialData = [
    { time: "2023-01-01", value: 5 },
    { time: "2023-02-01", value: 2 },
    // ... rest of the data ...
  ];

  const [metricData, setMetricData] = useState(initialData);
  const [newTime, setNewTime] = useState("");
  const [newValue, setNewValue] = useState("");

  const handleModify = (index) => {
    // Implement modify functionality here
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
    <div>
      <h2>Metric Data List</h2>
      <ul>
        {metricData.map((item, index) => (
          <li key={index}>
            Time: {item.time}, Value: {item.value}
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

export default MetricDataList;
