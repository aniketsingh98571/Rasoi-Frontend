import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Dropdown.module.css";
const Dropdown = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("verifierId");
    navigate("/verificationLogin");
  };

  const handleAnalytics = () => {
    navigate("/validatorAnalytics");
  };
  return (
    <div className={classes.menu}>
      <div className={classes.menuItem} onClick={handleAnalytics}>
        <h3>Analytics</h3>
      </div>
      <div className={classes.menuItem} onClick={handleLogout}>
        <h3>Logout</h3>
      </div>
    </div>
  );
};

export default Dropdown;
