import React, { useState, useEffect } from "react";
import TestUser from "./VerifiedUsersList";
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
  const [isList1Collapsed, setList1Collapsed] = useState(false);
  const [isList2Collapsed, setList2Collapsed] = useState(false);

  const toggleList1 = () => {
    setList1Collapsed(!isList1Collapsed);
  };

  const toggleList2 = () => {
    setList2Collapsed(!isList2Collapsed);
  };

  return (
    <div className="users-main">
      <div className={`collapsible ${isList1Collapsed ? "collapsed" : ""}`}>
        <div className="collapsible-header" onClick={toggleList1}>
          Users
          <span
            className={`arrow ${isList1Collapsed ? "collapsed" : ""}`}
          ></span>
        </div>
        <div className="collapsible-content">
          <TestUser userList={data} />
        </div>
      </div>
      <div className={`collapsible ${isList2Collapsed ? "collapsed" : ""}`}>
        <div className="collapsible-header" onClick={toggleList2}>
          Users 2
          <span
            className={`arrow ${isList2Collapsed ? "collapsed" : ""}`}
          ></span>
        </div>
        <div className="collapsible-content">
          <TestUser userList={data} />
        </div>
      </div>
    </div>
  );
};

export default UsersMain;
