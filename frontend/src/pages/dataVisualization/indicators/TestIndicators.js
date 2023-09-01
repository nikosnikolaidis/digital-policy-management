import React, { useState } from "react";
import Indicator from "./Indicator";

const jsonData = [
  {
    id: 4,
    date: "2023-12-20T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 10.0,
  },
  {
    id: 6,
    date: "2023-12-21T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 30.0,
  },
  {
    id: 8,
    date: "2023-12-22T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 40.0,
  },
  {
    id: 10,
    date: "2023-12-23T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 15.0,
  },
  {
    id: 10,
    date: "2023-12-24T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 10.0,
  },
  {
    id: 10,
    date: "2023-12-25T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 15.0,
  },
  {
    id: 10,
    date: "2023-12-26T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 25.0,
  },
  {
    id: 10,
    date: "2023-12-27T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 5.0,
  },
  {
    id: 10,
    date: "2023-12-28T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 20.0,
  },
  {
    id: 10,
    date: "2023-12-29T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 10.0,
  },
  {
    id: 10,
    date: "2023-12-30T12:00:00.000",
    indicator: {
      id: 2,
      name: "Number of papers",
      symbol: "NOP",
    },
    value: 15.0,
  },
];

function TestIndicators() {
  return (
    <div className="Indicator">
      <Indicator jsonData={jsonData} />
    </div>
  );
}

export default TestIndicators;
