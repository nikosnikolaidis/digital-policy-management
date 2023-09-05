import React, { useState } from "react";
import Indicator from "./IndicatorsMain";

const indicator_component = [
  {
    indicator_name: "Number of papers",
    indicator_data: [
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
    ],
  },
  {
    indicator_name: "Number of research projects",
    indicator_data: [
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
    ],
  },
  {
    indicator_name: "Number of PhD candidates",
    indicator_data: [
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
    ],
  },
  {
    indicator_name: "Number of male students",
    indicator_data: [
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
    ],
  },
  {
    indicator_name: "Number of female students",
    indicator_data: [
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
    ],
  },
];

function TestIndicators() {
  return (
    <div className="Indicator">
      <Indicator data={indicator_component} />
    </div>
  );
}

export default TestIndicators;
