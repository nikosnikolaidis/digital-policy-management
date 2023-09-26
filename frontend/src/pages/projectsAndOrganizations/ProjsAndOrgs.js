import React, { useState } from "react";
import ProjectsMain from "./projects/ProjectsMain";
import OrganizationsMain from "./organizations/OrganizationsMain";
import "./css/ProjsAndOrgs.css";

const ProjsAndOrgs = () => {
  const [isOrganizationsOpen, setIsOrganizationsOpen] = useState(false);
  // const [projectsWidth, setProjectsWidth] = useState("66.666%"); // Initial width for projects (2/3 of the total width)

  const toggleOrganizations = () => {
    setIsOrganizationsOpen(!isOrganizationsOpen);
  };

  // const handleProjectsResize = (newWidth) => {
  //   setProjectsWidth(newWidth);
  // };

  return (
    <div className="projs-and-orgs">
      <div
        className={`projects ${
          isOrganizationsOpen ? "contracted" : "expanded"
        }`}
        // style={{ flex: `0 0 ${projectsWidth}` }}
      >
        <ProjectsMain />
      </div>
      <div
        className={`separator ${isOrganizationsOpen ? "open" : "closed"}`}
        onClick={toggleOrganizations}
      >
        {/* <button onClick={toggleOrganizations} className="toggle-button">
          {isOrganizationsOpen ? "►" : "◄"}
        </button> */}
        {isOrganizationsOpen ? "►" : "◄"}
        {/* <div className={"arrow"}>{isOrganizationsOpen ? "►" : "◄"}</div> */}
      </div>
      <div
        className={`organizations ${isOrganizationsOpen ? "open" : "closed"}`}
      >
        <div className="organizations-content">
          <OrganizationsMain />
        </div>
      </div>
    </div>
  );
};

export default ProjsAndOrgs;
