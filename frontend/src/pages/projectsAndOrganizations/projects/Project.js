import React, { useState } from "react";
import "./css/Project.css";

const Project = ({ projectData }) => {
  const [isObjectiveCollapsed, setObjectiveCollapsed] = useState(true);

  const toggleObjective = () => {
    setObjectiveCollapsed(!isObjectiveCollapsed);
  };

  const participantAcronyms = projectData.participants.map(
    (participant) => participant.acronym
  );

  return (
    <div className="project">
      <div className="project-header">
        <div className="project-header-line">
          <span className="bold-text">ID:</span>
          <span>{projectData.id}</span>
          <span className="bold-text">, Title:</span>
          <span className="underline-text">{projectData.title}</span>
          <span>({projectData.acronym})</span>
          <span className="bold-text">, Date: </span>
          <span>{projectData.startDate}</span>
          <span className="bold-text">to</span>
          <span>{projectData.endDate}</span>
        </div>
      </div>
      <div className="project-objective bold-text" onClick={toggleObjective}>
        Objective
        <span className={`arrow ${isObjectiveCollapsed ? "collapsed" : ""}`}>
          &#9660;
        </span>
      </div>
      {!isObjectiveCollapsed && (
        <div className="project-objective-content">
          <div className="project-objective-text">{projectData.objective}</div>
        </div>
      )}
      <div className="project-topics">
        <span className="bold-text">Topics: </span>
        <span>{projectData.topics}</span>
      </div>

      <div className="project-header">
        <div className="project-details">
          <span className="bold-text">Total Cost: </span>
          <span>{projectData.totalCost}</span>
          <span className="bold-text"> €</span>
          <span className="bold-text">, Programme: </span>
          <span>{projectData.programme}</span>
          <span className="bold-text">, Call: </span>
          <span>{projectData.call}</span>
          <span className="bold-text">, Funding Scheme: </span>
          <span>{projectData.fundingScheme}</span>
        </div>
      </div>
      <div className="project-coordinator">
        <span className="bold-text">Coordinator: </span>
        <span>{projectData.coordinator.name}</span>
      </div>
      <div className="project-participants">
        <span className="bold-text">Participants: </span>
        {participantAcronyms.join(", ")}
      </div>
    </div>
  );
};

export default Project;
