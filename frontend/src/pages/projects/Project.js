import React, { useState } from "react";

const Project = ({ projectData }) => {
  const [isObjectiveCollapsed, setObjectiveCollapsed] = useState(true);

  const toggleObjective = () => {
    setObjectiveCollapsed(!isObjectiveCollapsed);
  };

  return (
    <div className="project">
      <div className="project-header">
        <div className="project-header-line">
          <span>ID: {projectData.id}</span>
          <span>Title: {projectData.title}</span>
          <span>({projectData.acronym})</span>
          <span>Start Date: {projectData.startDate}</span>
          <span>End Date: {projectData.endDate}</span>
        </div>
        <div className="project-objective" onClick={toggleObjective}>
          Objective
          <span className={`arrow ${isObjectiveCollapsed ? "collapsed" : ""}`}>
            &#9660;
          </span>
        </div>
      </div>
      {!isObjectiveCollapsed && (
        <div className="project-objective-content">{projectData.objective}</div>
      )}
      <div className="project-topics">Topics: {projectData.topics}</div>
      <div className="project-details">
        <span>Total Cost: {projectData.totalCost}</span>
        <span>Programme: {projectData.programme}</span>
        <span>Call: {projectData.call}</span>
        <span>Funding Scheme: {projectData.fundingScheme}</span>
      </div>
      <div className="project-coordinator">
        Coordinator: {projectData.coordinator.name}
      </div>
      <div className="project-participants">
        Participants: {projectData.participants.join(", ")}
      </div>
    </div>
  );
};

export default Project;
