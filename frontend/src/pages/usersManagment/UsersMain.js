import React, { useState, useEffect } from "react";
import UsersList from "./VerifiedUsersList";
import "./css/UsersMain.css";

var data = [
  {
    id: 1,
    name: "Admin",
    email: "admin@uom.gr",
    password: "jasdhasud",
    roles: "SIMPLE,PRIVILEGED",
    verified: true,
  },
  {
    id: 33,
    name: "test",
    email: "test@uom.gr",
    password: "hashdbas",
    roles: "SIMPLE",
    verified: true,
  },
];


const UsersMain = () => {
  const [isList1Collapsed, setList1Collapsed] = useState(true);
  const [isList2Collapsed, setList2Collapsed] = useState(true);

  const toggleList1 = () => {
    setList1Collapsed(!isList1Collapsed);
  };

  const toggleList2 = () => {
    setList2Collapsed(!isList2Collapsed);
  };

  return (
    <div className="users-main">
      <div className={`collapsible ${isList1Collapsed ? 'collapsed' : ''}`}>
        <div className={`collapsible-header ${!isList1Collapsed ? 'expanded' : ''}`} onClick={toggleList1}>
          Verified Users
          <span className={`arrow ${isList1Collapsed ? 'collapsed' : ''}`}>&#9660;</span>
        </div>
        <div className="collapsible-content">
          {!isList1Collapsed && <UsersList userList={data} />}
        </div>
      </div>
      <div className={`collapsible ${isList2Collapsed ? 'collapsed' : ''}`}>
        <div className={`collapsible-header ${!isList2Collapsed ? 'expanded' : ''}`} onClick={toggleList2}>
          Unverified Users
          <span className={`arrow ${isList2Collapsed ? 'collapsed' : ''}`}>&#9660;</span>
        </div>
        <div className="collapsible-content">
          {!isList2Collapsed && <UsersList userList={data} />}
        </div>
      </div>
    </div>
  );
};

export default UsersMain;