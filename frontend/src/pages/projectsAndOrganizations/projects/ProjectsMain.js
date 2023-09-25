import React, { useState, useEffect } from "react";
import Project from "./Project";
import "./css/ProjectsMain.css";

var projectsData = [];

const ProjectsMain = () => {
  const [searchText, setSearchText] = useState("");
  const [searchField, setSearchField] = useState("all");
  const [projectsData, setProjectsData] = useState([]);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // Function to handle dropdown change
  const handleDropdownChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          "Bearer " + localStorage.getItem("accessToken")
        );

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        // Step 1: Make an initial API call to fetch the JSON table
        const response = await fetch(
          process.env.REACT_APP_API_URL + `/euproject/finished/project/all`,
          requestOptions
        );
        const result = await response.json();

        // const result = await Promise.call(response);

        if (Array.isArray(result.solutions) && result.solutions.length > 0) {
          console.log("got projects from DB");
          setProjectsData(result.solutions); // Update state with fetched data
          // console.log("projectsData: " + JSON.stringify(projectsData));
          // console.log("projectsData: " + JSON.stringify(result.solutions));
        } else {
          console.log("API response is empty or not an array:", result);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array to run once on component mount

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
          {filteredProjects.length} noP
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

export default ProjectsMain;
