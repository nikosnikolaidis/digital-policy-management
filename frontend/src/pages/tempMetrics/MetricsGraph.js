import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MetricsGraph = ({ graphData }) => {
  return (
    <div className="graph-container">
      <div className="chart-wrapper">
        <LineChart
          width={800} // Set width to 100% within the chart wrapper
          height={400} // Set a fixed height or adjust as needed
          data={graphData}
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
    </div>
  );
};

export default MetricsGraph;
