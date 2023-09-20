import React from "react";
import "./css/VerifiedUser.css";

const VerifiedUser = ({ user, authoriseUser}) => {
  const { name, email, roles, verified } = user;

  // Check if the roles include "PRIVILEGED"
  const hasPrivilegedRole = roles.includes("PRIVILEGED");

  const handleAuthorise = async (e) => {
    e.preventDefault();

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     };
  //     const response = await axios
  //       .post(process.env.REACT_APP_API_URL+"/report/indicator", , )
  //       .then((response) => {
  //         console.log(response.data); // Access the response data here
  //         if (response.status === 200) {
  //           verifyUser({ date, value }); // Notify the parent component
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   } catch (error) {
  //     setMessage(false, "Error durring verification");
  //   }

  };


  return (
    <div className="verified-user">
      <div className="user-info">
        <div className="user-name">{name}</div>
        <div className="user-email">{email}</div>
        {hasPrivilegedRole ? null : (
          <button className="authorize-button" onClick={handleAuthorise}>Authorize</button>
        )}
      </div>
      <div className="user-roles">Roles: {roles}</div>
    </div>
  );
};

export default VerifiedUser;
