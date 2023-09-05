import React from "react";
import "./css/MetricData.css";

const MetricData = ({ data, onDelete }) => {
  return (
    <div className="metric-data">
      {/* <h2>{data.length > 0 && data[0].metric.name}</h2> */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <span>Date: {new Date(item.date).toLocaleDateString()}</span>
            <span>Value: {item.value}</span>
            {/* <button onClick={() => onDelete(item.id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetricData;
