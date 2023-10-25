import React from "react";
import "./css/ColaboratedPartners.css"; // Import the CSS file

const ColaboratedPartners = ({ data }) => {
  const partnersArray = Object.entries(data).slice(0, 10); // Get the first 10 key-value pairs

  return (
    <div className="colaborated-partners half_comp">
      <h2>Collaborated Partners</h2>
      <div className="partners">
        {partnersArray.map(([orgInfo, value], index) => (
          <div key={index} className="partner-item">
            {value} projects with {orgInfo.match(/name='(.*?)'/)[1]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColaboratedPartners;
