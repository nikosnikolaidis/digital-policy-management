import React, { useState } from "react";
import UnverifiedUser from "./UnverifiedUser"; // Import your VerifiedUser component
import "./css/VerifiedUsersList.css";

const UnverifiedUsersList = ({ userList, verifyUser, deleteUser }) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredUsers = userList.filter((user) => {
    const filterLowerCase = filterText.toLowerCase();
    const rolesLowerCase = user.roles.toLowerCase();

    const isMatch =
      user.name.toLowerCase().includes(filterLowerCase) ||
      user.email.toLowerCase().includes(filterLowerCase);

    return isMatch;
  });

  return (
    <div className="users-list">
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by name or email"
          value={filterText}
          onChange={handleFilterTextChange}
        />
      </div>
      <div className="user-list">
        {filteredUsers.map((user) => (
          <UnverifiedUser
            key={user.id}
            user={user}
            verifyUser={verifyUser}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </div>
  );
};

export default UnverifiedUsersList;
