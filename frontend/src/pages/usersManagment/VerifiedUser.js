import React from "react";
import "./css/VerifiedUser.css";

const VerifiedUser = ({ user }) => {
  const { name, email, roles, verified } = user;

  // Check if the roles include "PRIVILEGED"
  const hasPrivilegedRole = roles.includes("PRIVILEGED");

  return (
    <div className="verified-user">
      <div className="user-info">
        <div className="user-name">{name}</div>
        <div className="user-email">{email}</div>
        {hasPrivilegedRole ? null : (
          <button className="authorize-button">Authorize</button>
        )}
      </div>
      <div className="user-roles">Roles: {roles}</div>
    </div>
  );
};

export default VerifiedUser;
