import React, { useState, useEffect } from "react";
import VerifiedUsersList from "./VerifiedUsersList";
import UnverifiedUsersList from "./UnverifiedUsersList";
import "./css/UsersMain.css";

const UsersMain = () => {
  const [isList1Collapsed, setList1Collapsed] = useState(true);
  const [isList2Collapsed, setList2Collapsed] = useState(true);
  const [verifiedUsers, setVerifiedUsers] = useState([]);
  const [unverifiedUsers, setUnverifiedUsers] = useState([]);

  const toggleList1 = () => {
    setList1Collapsed(!isList1Collapsed);
  };

  const toggleList2 = () => {
    setList2Collapsed(!isList2Collapsed);
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
          process.env.REACT_APP_API_URL+`/user/all`,
          requestOptions
        );
        const result = await response.json();

        if (Array.isArray(result) && result.length > 0) {
          // console.log("API response result:", result);

          var tempUsers = result.filter((user) => user.verified);
          setVerifiedUsers(tempUsers);
          tempUsers = result.filter((user) => !user.verified)
          setUnverifiedUsers(tempUsers);
        } else {
          console.log("API response is empty or not an array:", result);
        } 
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on component mount



  const handleUserVerification = (newData) => {
    //add to verified
    //remove from unverified

    // setData([...data, newData]);
  };
  const handleUserAuthorisation = (newData) => {
    // setData([...data, newData]);
  };

  return (
    <div className="users-main">
      <div className={`collapsible ${isList1Collapsed ? 'collapsed' : ''}`}>
        <div className={`collapsible-header ${!isList1Collapsed ? 'expanded' : ''}`} onClick={toggleList1}>
          Verified Users
          <span className={`arrow ${isList1Collapsed ? 'collapsed' : ''}`}>&#9660;</span>
        </div>
        <div className="collapsible-content">
          {!isList1Collapsed && <VerifiedUsersList userList={verifiedUsers} authoriseUser={handleUserAuthorisation}/>}
        </div>
      </div>
      <div className={`collapsible ${isList2Collapsed ? 'collapsed' : ''}`}>
        <div className={`collapsible-header ${!isList2Collapsed ? 'expanded' : ''}`} onClick={toggleList2}>
          Unverified Users
          <span className={`arrow ${isList2Collapsed ? 'collapsed' : ''}`}>&#9660;</span>
        </div>
        <div className="collapsible-content">
          {!isList2Collapsed && <UnverifiedUsersList userList={unverifiedUsers} verifyUser={handleUserVerification}/>}
        </div>
      </div>
    </div>
  );
};

export default UsersMain;