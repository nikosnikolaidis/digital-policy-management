import React, { useState, useEffect } from "react";
import Project from "./Project";
import "./css/ProjectsList.css";

const ProjectsList = ({ projectsData, totalItems }) => {
  const [searchText, setSearchText] = useState("");
  const [searchField, setSearchField] = useState("all");

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // Function to handle dropdown change
  const handleDropdownChange = (e) => {
    setSearchField(e.target.value);
  };

  // Function to filter projects based on search input and selected field
  const filterProjects = () => {
    const filtered = projectsData.filter((project) => {
      if (searchField === "all") {
        return Object.values(project).some((value) =>
          String(value).toLowerCase().includes(searchText.toLowerCase())
        );
      } else {
        return String(project[searchField])
          .toLowerCase()
          .includes(searchText.toLowerCase());
      }
    });
    return filtered;
  };

  const filteredProjects = filterProjects();

  return (
    <div className="projects-main">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchInputChange}
        />
        <select onChange={handleDropdownChange} value={searchField}>
          <option value="all">All</option>
          <option value="title">Title</option>
          <option value="objective">Objective</option>
          <option value="topics">Topic</option>
        </select>
        <div className="filtered-count-label">
          {/* {filteredProjects.length} noP */}
          {totalItems}
        </div>
      </div>
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <Project key={project.id} projectData={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
