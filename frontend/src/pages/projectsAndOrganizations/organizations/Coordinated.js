import React, { useState, useEffect } from "react";
import ProjectsList from "./ProjectsList";

const Coordinated = ({ projectsData }) => {
  return (
    <div>
      <ProjectsList projectsData={projectsData} />
    </div>
  );
};

export default Coordinated;
