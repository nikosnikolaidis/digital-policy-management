import React from "react";
import axios from "axios";
import "./css/UnverifiedUser.css";

const UnverifiedUser = ({ user, verifyUser }) => {
  const { name, email, roles } = user;

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const accessToken = localStorage.getItem("accessToken");

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      // Use Axios for the API request
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/verify?email=${email}`,
        null,
        {
          headers,
        }
      );

      console.log(response.data);
      verifyUser(response.data);
    } catch (error) {
      console.log("Error during Verification");
    }
  };

  return (
    <div className="unverified-user">
      <div className="user-info">
        <div className="user-name">{name}</div>
        <div className="user-email">{email}</div>
        <button className="verify-button" onClick={handleVerify}>
          Verify
        </button>
      </div>
      <div className="user-roles">Roles: {roles}</div>
    </div>
  );
};

export default UnverifiedUser;
