import React from "react";
import OrganizationInfo from "./OrganizationInfo"; // Make sure to import the component

const OrganizationsMain = () => {
  const organizationData = {
    id: 999874352,
    name: "UNIVERSITY OF MACEDONIA",
    acronym: "UOM",
    country: "EL",
    street: "EGNATIA STREET 156",
    city: "THESSALONIKI",
    postCode: "540 06",
    organizationUrl: "www.uom.gr",
    vatNumber: "EL090203611",
  };

  return (
    <div>
      <h1>Organization Information</h1>
      <OrganizationInfo organizationData={organizationData} />
    </div>
  );
};

export default OrganizationsMain;
