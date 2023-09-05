import React, { useState } from "react";
import MetricsMain from "./MetricsMain";

const metric_component = [
  {
    metric_name: "Research",
    metric_data: [
      {
        id: 3,
        date: "2023-12-20T12:00:00.000",
        metric: {
          id: 3,
          name: "research",
          equation: "NOP / 50",
          IndicatorList: [
            {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
          ],
        },
        value: 0.2,
      },
      {
        id: 5,
        date: "2023-12-21T12:00:00.000",
        metric: {
          id: 3,
          name: "research",
          equation: "NOP / 50",
          IndicatorList: [
            {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
          ],
        },
        value: 0.7,
      },
      {
        id: 7,
        date: "2023-12-22T12:00:00.000",
        metric: {
          id: 3,
          name: "research",
          equation: "NOP / 50",
          IndicatorList: [
            {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
          ],
        },
        value: 0.5,
      },
      {
        id: 9,
        date: "2023-12-23T12:00:00.000",
        metric: {
          id: 3,
          name: "research",
          equation: "NOP / 50",
          IndicatorList: [
            {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
          ],
        },
        value: 0.9,
      },
      {
        id: 11,
        date: "2023-12-24T12:00:00.000",
        metric: {
          id: 3,
          name: "research",
          equation: "NOP / 50",
          IndicatorList: [
            {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
          ],
        },
        value: 0.4,
      },
    ],
  },
  {
    metric_name: "Metric 2",
    metric_data: [
      {
        id: 3,
        date: "2023-12-20T12:00:00.000",
        metric: {
          id: 3,
          name: "research",
          equation: "NOP / 50",
          IndicatorList: [
            {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
          ],
        },
        value: 0.2,
      },
      {
        id: 5,
        date: "2023-12-21T12:00:00.000",
        metric: {
          id: 3,
          name: "research",
          equation: "NOP / 50",
          IndicatorList: [
            {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
          ],
        },
        value: 0.7,
      },
      {
        id: 7,
        date: "2023-12-22T12:00:00.000",
        metric: {
          id: 3,
          name: "research",
          equation: "NOP / 50",
          IndicatorList: [
            {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
          ],
        },
        value: 0.5,
      },
      {
        id: 9,
        date: "2023-12-23T12:00:00.000",
        metric: {
          id: 3,
          name: "research",
          equation: "NOP / 50",
          IndicatorList: [
            {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
          ],
        },
        value: 0.9,
      },
      {
        id: 11,
        date: "2023-12-24T12:00:00.000",
        metric: {
          id: 3,
          name: "research",
          equation: "NOP / 50",
          IndicatorList: [
            {
              id: 2,
              name: "Number of papers",
              symbol: "NOP",
            },
          ],
        },
        value: 0.4,
      },
    ],
  },
];

function TestMetrics() {
  return (
    <div className="Metric">
      <MetricsMain data={metric_component} />
    </div>
  );
}

export default TestMetrics;
