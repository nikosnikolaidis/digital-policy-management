// import DataVisualization from "./DataVisualization";
import { useState } from "react";
import PairListWithTabs from "./PairListWithTabs";

const Metrics = () => {
  const [data, setData] = useState([
    {
      key: "metric aaa",
      value: "23",
      graphData: [
        { time: "2023-01-01", value: 10 },
        { time: "2023-02-01", value: 15 },
        { time: "2023-03-01", value: 20 },
        { time: "2023-06-01", value: 10 },
        { time: "2023-11-01", value: 30 },
        // ... more data entries
      ],
    },
    {
      key: "metric bbb",
      value: "122",
      graphData: [
        { time: "2023-01-01", value: 5 },
        { time: "2023-02-01", value: 2 },
        { time: "2023-03-01", value: 3 },
        { time: "2023-06-01", value: 1 },
        { time: "2023-07-01", value: 0.4 },
        { time: "2023-07-02", value: 1 },
        { time: "2023-07-15", value: 1.2 },
        { time: "2023-08-02", value: 0.8 },
        { time: "2023-08-16", value: 1 },
        { time: "2023-09-22", value: 2 },
        { time: "2023-10-13", value: 4 },
        { time: "2023-11-07", value: 17 },
      ],
    },
    {
      key: "metric ccc",
      value: "54",
      graphData: [
        { time: "2023-01-01", value: 2 },
        { time: "2023-02-01", value: 3 },
        { time: "2023-03-01", value: 2 },
        { time: "2023-06-01", value: 5 },
        { time: "2023-11-01", value: 7 },
      ],
    },
  ]);

  const handleDataAdd = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div>
      <h1>Data Visualization Example</h1>
      <PairListWithTabs data={data} onDataAdd={handleDataAdd} />
    </div>
  );
};

export default Metrics;
