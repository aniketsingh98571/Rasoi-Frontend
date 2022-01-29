import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Dropdown.module.css";

const Dropdown = () => {
  let navigate = useNavigate();
  const handleProfileClick = (e) => {
    navigate("/profile");
  };
  const handleOrderClick = () => {
    navigate("/orders");
  };
  const handleLogoutClick = () => {
    localStorage.removeItem("consumerID");
    navigate("/");
  };
  return (
    <div className={classes.menu}>
      <div className={classes.menuItem} onClick={handleProfileClick}>
        <h3>Profile</h3>
      </div>

      <div className={classes.menuItem} onClick={handleOrderClick}>
        <h3>Order</h3>
      </div>

      <div className={classes.menuItem} onClick={handleLogoutClick}>
        <h3>Logout</h3>
      </div>
    </div>
  );
};

export default Dropdown;
