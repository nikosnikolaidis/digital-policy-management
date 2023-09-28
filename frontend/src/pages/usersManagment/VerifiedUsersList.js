import React, { useState } from "react";
import VerifiedUser from "./VerifiedUser"; // Import your VerifiedUser component
import "./css/VerifiedUsersList.css";

const VerifiedUsersList = ({ userList, authoriseUser }) => {
  const [filterText, setFilterText] = useState("");
  const [showPrivileged, setShowPrivileged] = useState(false);

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  const handlePrivilegedChange = (e) => {
    setShowPrivileged(e.target.checked);
  };

  const filteredUsers = userList.filter((user) => {
    const filterLowerCase = filterText.toLowerCase();
    const rolesLowerCase = user.roles.toLowerCase();

    const isMatch =
      user.name.toLowerCase().includes(filterLowerCase) ||
      user.email.toLowerCase().includes(filterLowerCase);

    return (
      isMatch && (!showPrivileged || rolesLowerCase.includes("privileged"))
    );
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
        <label>
          <input
            type="checkbox"
            checked={showPrivileged}
            onChange={handlePrivilegedChange}
          />
          Show Privileged
        </label>
      </div>
      <div className="user-list">
        {filteredUsers.map((user) => (
          <VerifiedUser
            key={user.id}
            user={user}
            hasPrivilegedRole={user.roles.includes("PRIVILEGED")}
            authoriseUser={authoriseUser}
          />
        ))}
      </div>
    </div>
  );
};

export default VerifiedUsersList;
