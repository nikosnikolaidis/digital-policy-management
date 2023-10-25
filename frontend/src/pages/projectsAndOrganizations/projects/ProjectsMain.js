import React, { useState, useEffect } from "react";
import ProjectsList from "./ProjectsList";
import "./css/ProjectsMain.css";

const ProjectsMain = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [totalItems, setTotalItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  function fetchDataDB(page, keyword) {
    var call = "/euproject/finished/project/all?size=50";

    page = page === undefined ? "" : page;
    if (page !== null && page !== "" && page >= 0) {
      call += "&page=";
      call += page;
    }

    keyword = keyword === undefined ? "" : keyword;
    if (keyword !== null && keyword !== "") {
      call += "&contain=" + keyword;
      call += keyword;
    }

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
          process.env.REACT_APP_API_URL + call,
          requestOptions
        );
        const result = await response.json();

        // const result = await Promise.call(response);

        if (Array.isArray(result.projects) && result.projects.length > 0) {
          setProjectsData(result.projects); // Update state with fetched data
          setTotalItems(result.totalItems);
          setTotalPages(result.totalPages);
          setCurrentPage(result.currentPage);
        } else {
          console.log("API response is empty or not an array:", result);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }

  const handleNextPage = () => {
    if (currentPage >= totalPages - 1) {
      return;
    }
    fetchDataDB(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage <= 0) {
      return;
    }
    fetchDataDB(currentPage - 1);
  };

  useEffect(() => {
    fetchDataDB();
  }, []); // Empty dependency array to run once on component mount

  return (
    <div>
      <div className="projects-list-container">
        <ProjectsList projectsData={projectsData} totalItems={totalItems} />
      </div>
      <div className="pages">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          ◄ Previous
        </button>
        <span>
          {currentPage + 1} / {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next ►
        </button>
      </div>
    </div>
  );
};

export default ProjectsMain;
