import React from "react";

const UnverifiedUser = ({ user }) => {
  const { name, email, roles } = user;

  return (
    <div className="unverified-user">
      <div className="user-info">
        <div className="user-name">{name}</div>
        <div className="user-email">{email}</div>
        <button className="verify-button">Verify</button>
      </div>
      <div className="user-roles">Roles: {roles}</div>
    </div>
  );
};

export default UnverifiedUser;
