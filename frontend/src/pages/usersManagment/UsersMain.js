import React, { useState, useEffect } from "react";
import VerifiedUsersList from "./VerifiedUsersList";
import UnverifiedUsersList from "./UnverifiedUsersList";
import "./css/UsersMain.css";
import * as scripts from "../../scripts/Tokens";
import axios from "axios";

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
          process.env.REACT_APP_API_URL + `/user/all`,
          requestOptions
        );
        const result = await response.json();

        if (Array.isArray(result) && result.length > 0) {
          // console.log("API response result:", result);

          var tempUsers = result.filter((user) => user.verified);

          //remove current PRIVILAGED user from tempUsers
          var email = scripts.getEmail();

          let obj = tempUsers.find((usr, i) => {
            if (usr.email === email) {
              tempUsers.splice(i, 1);
              return true; // stop searching
            }
          });

          setVerifiedUsers(tempUsers);
          tempUsers = result.filter((user) => !user.verified);
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

  const handleUserVerification = (user) => {
    if (!user.verified) {
      return;
    }
    var newUsers = deleteFromUserList(unverifiedUsers, user.email);
    setUnverifiedUsers(newUsers);

    // add the user to the verified ones
    setVerifiedUsers((current) => [...current, user]);
  };

  const handleUserAuthorisation = (user) => {
    console.log("UsersMain - authorizing user: " + user.email);
    console.log("UsersMain - user: " + JSON.stringify(user));

    const newUserList = [...verifiedUsers];
    let obj = newUserList.find((usr, i) => {
      if (usr.email === user.email) {
        newUserList[i] = user;
        return true; // stop searching
      }
    });
    setVerifiedUsers(newUserList);
  };

  const handleUserDelete = async (email, isVerified) => {
    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/admin/delete/user?email=${email}`;

      // Define the request configuration object with headers
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };

      // Send the DELETE request with the configuration object
      const response = await axios.delete(apiUrl, config);
      if (response.status === 200) {
        console.log("Deleted successfully:", response.data);

        // Update the user lists based on whether the user was verified or not
        if (isVerified) {
          setVerifiedUsers(deleteFromUserList(verifiedUsers, email));
        } else {
          setUnverifiedUsers(deleteFromUserList(unverifiedUsers, email));
        }
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (error) {
      // Handle errors here
      console.error("Error deleting:", error);
    }
  };

  const deleteFromUserList = (userList, email) => {
    const newUserList = [...userList];
    let obj = newUserList.find((usr, i) => {
      if (usr.email === email) {
        newUserList.splice(i, 1);
        return true; // stop searching
      }
    });
    return newUserList;
  };

  return (
    <div className="users-main main_container">
      <div className={`collapsible ${isList1Collapsed ? "collapsed" : ""}`}>
        <div
          className={`collapsible-header ${
            !isList1Collapsed ? "expanded" : ""
          }`}
          onClick={toggleList1}
        >
          Verified Users
          <span className={`arrow ${isList1Collapsed ? "collapsed" : ""}`}>
            &#9660;
          </span>
        </div>
        <div className="collapsible-content">
          {!isList1Collapsed && (
            <VerifiedUsersList
              userList={verifiedUsers}
              authoriseUser={handleUserAuthorisation}
              deleteUser={handleUserDelete}
            />
          )}
        </div>
      </div>
      <div className={`collapsible ${isList2Collapsed ? "collapsed" : ""}`}>
        <div
          className={`collapsible-header ${
            !isList2Collapsed ? "expanded" : ""
          }`}
          onClick={toggleList2}
        >
          Unverified Users
          <span className={`arrow ${isList2Collapsed ? "collapsed" : ""}`}>
            &#9660;
          </span>
        </div>
        <div className="collapsible-content">
          {!isList2Collapsed && (
            <UnverifiedUsersList
              userList={unverifiedUsers}
              verifyUser={handleUserVerification}
              deleteUser={handleUserDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersMain;
