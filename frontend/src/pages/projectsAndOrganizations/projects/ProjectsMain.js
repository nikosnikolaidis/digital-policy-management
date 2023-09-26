import React, { useState, useEffect } from "react";
import ProjectsList from "./ProjectsList";

const ProjectsMain = () => {
  const [projectsData, setProjectsData] = useState([]);

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

  return (
    <div>
      <ProjectsList projectsData={projectsData} />
    </div>
  );
};

export default ProjectsMain;
