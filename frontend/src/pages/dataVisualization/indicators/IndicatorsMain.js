import React, { useState } from "react";
import Indicator from "./Indicator"; // Import the Indicator component

const IndicatorsMain = () => {
  // Initialize state with an empty array
  const [indicatorData, setIndicatorData] = useState([]);

  // Sample JSON data (you can replace it with your own data)
  const initialData = [
    {
      id: 1,
      indicator: {
        name: "Indicator 1",
      },
      // ... other fields
    },
    {
      id: 2,
      indicator: {
        name: "Indicator 2",
      },
      // ... other fields
    },
    // ... add more indicators as needed
  ];

  // Function to add a new indicator to the state
  const addIndicator = () => {
    // Generate a new indicator object (you can customize this)
    const newIndicator = {
      id: indicatorData.length + 1,
      indicator: {
        name: `Indicator ${indicatorData.length + 1}`,
      },
      // ... other fields for the new indicator
    };

    // Update the state with the new indicator
    setIndicatorData([...indicatorData, newIndicator]);
  };

  return (
    <div>
      <h1>Indicators Main</h1>
      <button onClick={addIndicator}>Add Indicator</button>
      {indicatorData.map((data) => (
        <Indicator key={data.id} data={data} />
      ))}
    </div>
  );
};

export default IndicatorsMain;
