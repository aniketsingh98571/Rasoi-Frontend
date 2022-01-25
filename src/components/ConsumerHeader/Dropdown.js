import React from "react";
import classes from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <div className={classes.menu}>
      <div className={classes.menuItem}>
        <h3>Profile</h3>
      </div>

      <div className={classes.menuItem}>
        <h3>Order</h3>
      </div>

      <div className={classes.menuItem}>
        <h3>Logout</h3>
      </div>
    </div>
  );
};

export default Dropdown;
