import React, { useState } from "react";
import OrganizationInfo from "./OrganizationInfo";
import Participated from "./Participated";
import Coordinated from "./Coordinated";
import ColaboratedPartners from "./ColaboratedPartners";
import axios from "axios";
import "./css/OrganizationsMain.css";

const OrganizationsMain = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [searchName, setSearchName] = useState("");
  const [organizationData, setOrganizationData] = useState({});
  const [participationData, setParticipationData] = useState({});
  const [coordinationData, setCoordinationData] = useState({});
  const [collaboratorsData, setCollaboratorsData] = useState({});

  const getOrganisation = async (searchName) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/euproject/finished/organization?name=${searchName}`;
    const config = {
      method: "get", // This is the default method for Axios, so it's optional.
      url: apiUrl,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    try {
      const response = await axios(config); // Await the Axios response
      return response.data;
    } catch (error) {
      // console.log("error", error);
      // throw error; // Re-throw the error so it can be caught further up the chain if needed
      return false;
    }
  };

  const getParticipation = async (orgID) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/euproject/finished/organization/projectsParticipated?orgId=${orgID}`;
    const config = {
      method: "get", // This is the default method for Axios, so it's optional.
      url: apiUrl,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    try {
      const response = await axios(config); // Await the Axios response
      return response.data;
    } catch (error) {
      // console.log("error", error);
      // throw error; // Re-throw the error so it can be caught further up the chain if needed
      return false;
    }
  };

  const getCooordination = async (orgID) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/euproject/finished/organization/projectsCoordinated?orgId=${orgID}`;
    const config = {
      method: "get", // This is the default method for Axios, so it's optional.
      url: apiUrl,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    try {
      const response = await axios(config); // Await the Axios response
      return response.data;
    } catch (error) {
      // console.log("error", error);
      // throw error; // Re-throw the error so it can be caught further up the chain if needed
      return false;
    }
  };

  const getMostCollaborated = async (orgID) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/euproject/finished/organization/topPartners?orgId=${orgID}`;
    const config = {
      method: "get", // This is the default method for Axios, so it's optional.
      url: apiUrl,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    try {
      const response = await axios(config); // Await the Axios response
      return response.data;
    } catch (error) {
      // console.log("error", error);
      // throw error; // Re-throw the error so it can be caught further up the chain if needed
      return false;
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSearch = async (searchName) => {
    //
    var orgDataPromise = getOrganisation(searchName);
    if (orgDataPromise === false) {
      return;
    }

    const orgData = await orgDataPromise; // Wait for the promise to resolve
    if (orgData === false) {
      return;
    }
    setOrganizationData(orgData);

    // getMostCollaborated
    var orgCollaboratorsData = getMostCollaborated(orgData.id);
    if (orgCollaboratorsData === false) {
      return;
    }

    const orgCollabs = await orgCollaboratorsData; // Wait for the promise to resolve
    if (orgCollabs === false) {
      return;
    }
    setCollaboratorsData(orgCollabs);

    //
    var orgParticipatioData = getParticipation(orgData.id);
    if (orgParticipatioData === false) {
      return;
    }
    const orgPartData = await orgParticipatioData; // Wait for the promise to resolve
    if (orgPartData === false) {
      return;
    }
    setParticipationData(orgPartData);

    //
    var orgCoordinationData = getCooordination(orgData.id);
    if (orgCoordinationData === false) {
      return;
    }
    const orgCoordData = await orgCoordinationData; // Wait for the promise to resolve
    if (orgCoordData === false) {
      return;
    }
    setCoordinationData(orgCoordData);
  };

  const handleSearchButtonClick = () => {
    // Call handleSearch with the current searchName
    handleSearch(searchName);
  };

  return (
    <div className="organizations-main">
      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)} // Update searchName state
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>

      <div className="tab-header">
        <div
          className={`tab ${activeTab === "info" ? "active" : ""}`}
          onClick={() => handleTabClick("info")}
        >
          Info
        </div>
        <div
          className={`tab ${activeTab === "coordinated" ? "active" : ""}`}
          onClick={() => handleTabClick("coordinated")}
        >
          Coordinated
        </div>
        <div
          className={`tab ${activeTab === "participated" ? "active" : ""}`}
          onClick={() => handleTabClick("participated")}
        >
          Participated
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "info" && (
          <div className="InfoTab">
            <OrganizationInfo organizationData={organizationData} />
            <ColaboratedPartners data={collaboratorsData} />
          </div>
        )}
        {activeTab === "coordinated" && (
          <div>
            <Coordinated projectsData={participationData} />
          </div>
        )}
        {activeTab === "participated" && (
          <div>
            <Participated projectsData={coordinationData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizationsMain;
