import React from "react";
import "./css/OrganizationInfo.css";

const OrganizationInfo = ({ organizationData }) => {
  return (
    <div className="organization-info half_comp">
      <h2>{organizationData.name}</h2>
      <p>
        <strong>Acronym:</strong> {organizationData.acronym}
      </p>
      <p>
        <strong>Country:</strong> {organizationData.country}
      </p>
      <p>
        <strong>Street:</strong> {organizationData.street}
      </p>
      <p>
        <strong>City:</strong> {organizationData.city}
      </p>
      <p>
        <strong>Post Code:</strong> {organizationData.postCode}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={organizationData.organizationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {organizationData.organizationUrl}
        </a>
      </p>
      <p>
        <strong>VAT Number:</strong> {organizationData.vatNumber}
      </p>
    </div>
  );
};

export default OrganizationInfo;
