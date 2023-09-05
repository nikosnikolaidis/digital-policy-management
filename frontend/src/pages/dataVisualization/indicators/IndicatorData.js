import React, { useState } from 'react';
import "./css/IndicatorData.css";

const IndicatorData = ({ data, onDeleteItem }) => {
  return (
    <div class="interaction-box">
      {/* <h2>{data[0].indicator.name}</h2> */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            Date: {item.date}, Value: {item.value}
            {/* <button onClick={() => onDeleteItem(item.id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndicatorData;