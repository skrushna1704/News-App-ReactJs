import React from "react";
import Sidebar from "./Sidebar";
import "./Navbar.css";
const Navbar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icons">
        <Sidebar setCategory={setCategory} />
      </div>
      <img src="/cnbc_logo.gif" alt="logo" />
    </div>
  );
};

export default Navbar;
