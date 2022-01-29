import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Dropdown.module.css";
const Dropdown = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("verifierId");
    navigate("/verificationLogin");
  };
  return (
    <div className={classes.menu}>
      <div className={classes.menuItem} onClick={handleLogout}>
        <h3>Logout</h3>
      </div>
    </div>
  );
};

export default Dropdown;
