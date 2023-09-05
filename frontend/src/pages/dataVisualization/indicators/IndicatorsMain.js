import React, { useState, useEffect } from "react";

import Indicator from "./Indicator"; // Import the Indicator component
import "./css/IndicatorsMain.css";

/* 
data format:
 data = [
  {
    indicator_name: "aaaaaa",
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
      .....
    },
    .....
  ]
*/

const IndicatorsMain = () => {
  // Initialize state to track which indicator is expanded
  const [expandedIndicatorId, setExpandedIndicatorId] = useState(null);
  const [data, setData] = useState([]);
  const [indicatorNames, setIndicatorNames] = useState([]);

  useEffect(async () => {
    setData([]);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("accessToken")
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch("http://xxx/indicator/all", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        for (var i = 0; i < result.length; i++) {
          var newIndicatorNames = indicatorNames;
          newIndicatorNames.push(result[i].name);
          setIndicatorNames(newIndicatorNames);
          console.log("result[i].name ---> " + result[i].name);
          var myHeaders = new Headers();
          myHeaders.append(
            "Authorization",
            "Bearer " + localStorage.getItem("accessToken")
          );

          var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };
        }
      })
      .catch((error) => console.log("error", error));

    for (var ind = 0; ind < indicatorNames.length; ind++) {
      await fetch(
        "http://xxx/report/indicator?indicatorName=" + indicatorNames[ind],
        requestOptions
      )
        .then((response) => response.text())
        .then((reportResult) => {
          console.log("indicatorNames[ind] --> " + indicatorNames[ind]);
          var dataNew = data;
          dataNew.push({
            indicator_name: indicatorNames[ind],
            indicator_data: JSON.parse(reportResult),
          });
          console.log(
            "indicatorNames[indicatorNames.length - 1] ----> " + indicatorNames
          );
          setData(dataNew);
          console.log("data ---> " + JSON.stringify(data));
        })
        .catch((error) => console.log("error", error));
    }
  }, []);

  // Function to toggle the expanded state of an indicator
  const toggleIndicator = (indicatorId) => {
    setExpandedIndicatorId((prevId) =>
      prevId === indicatorId ? null : indicatorId
    );
  };

  return (
    <div className="Indicator">
      {data.map((indicator_component) => (
        <div className={"indicator_component_panel"}>
          <div
            key={indicator_component.indicator_name}
            onClick={() => toggleIndicator(indicator_component.indicator_name)}
            className={`indicator-button ${
              expandedIndicatorId === indicator_component.indicator_name
                ? "active"
                : ""
            }`}
          >
            {indicator_component.indicator_name}
          </div>
          {expandedIndicatorId === indicator_component.indicator_name && (
            <Indicator jsonData={indicator_component.indicator_data} />
          )}
        </div>
      ))}
    </div>
  );
};

export default IndicatorsMain;
