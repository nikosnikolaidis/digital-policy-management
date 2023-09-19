import React from "react";

import "./css/MultiGraphComponent.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MultiGraphComponent = ({ tables }) => {

  return (
    <div className={`multi-graph-container`}>
      {tables.map((table, index) => (
        <div key={index} className="graph-container">
          <h3 className="graph-title">Graph {index + 1}</h3>
          <LineChart
            width={800}
            height={400}
            data={table.data}
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
      ))}
    </div>
  );
};

export default MultiGraphComponent;
