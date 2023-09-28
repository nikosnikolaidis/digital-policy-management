import React, { useState } from "react";
import axios from "axios";
import "./css/VerifiedUser.css";

const VerifiedUser = ({ user, hasPrivilegedRole, authoriseUser }) => {
  const { name, email, roles } = user;
  // const [verUser, setVerUser] = useState(user);

  const handleAuthorise = async (e) => {
    e.preventDefault();
    try {
      const accessToken = localStorage.getItem("accessToken");

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      // Use Axios for the API request
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/authorize?email=${email}`,
        null,
        {
          headers,
        }
      );

      console.log(response.data);
      authoriseUser(response.data);
    } catch (error) {
      console.log("Error during Authorization");
      console.error(error);
    }
  };

  return (
    <div className="verified-user">
      <div className="user-info">
        <div className="user-name">{name}</div>
        <div className="user-email">{email}</div>
        {hasPrivilegedRole ? null : (
          <button className="authorize-button" onClick={handleAuthorise}>
            Authorize
          </button>
        )}
      </div>
      <div className="user-roles">Roles: {roles}</div>
    </div>
  );
};

export default VerifiedUser;
