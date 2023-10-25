import React, { useState, useEffect } from "react";
import ProjectsList from "./ProjectsList";

const Participated = ({ projectsData }) => {
  return (
    <div>
      <ProjectsList projectsData={projectsData} />
    </div>
  );
};

export default Participated;
