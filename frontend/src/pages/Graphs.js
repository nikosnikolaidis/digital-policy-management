import MultiGraphComponent from "./MultiGraphComponent";

//example values
const tables = [
  {
    data: [
      { time: "2023-01-01", value: 10 },
      { time: "2023-02-01", value: 15 },
      { time: "2023-03-01", value: 20 },
      { time: "2023-06-01", value: 10 },
      { time: "2023-11-01", value: 30 },
      // ... more data entries
    ],
  },
  {
    data: [
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
      { time: "2023-11-07", value: 1.7 },
      // Another set of data for the second graph
    ],
  },
  {
    data: [
      { time: "2023-01-01", value: 2 },
      { time: "2023-02-01", value: 3 },
      { time: "2023-03-01", value: 2 },
      { time: "2023-06-01", value: 5 },
      { time: "2023-11-01", value: 7 },
      // Another set of data for the second graph
    ],
  },
  // ... more tables
];

const Graphs = () => {
  return (
    <div>
      <h1>Graphs</h1>
      <MultiGraphComponent tables={tables} />
    </div>
  );
};

export default Graphs;
