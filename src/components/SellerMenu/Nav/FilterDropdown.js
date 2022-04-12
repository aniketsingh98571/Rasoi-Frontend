import React from "react";
import classes from "./FilterDropdown.module.css";
// import axios from "axios";

const FilterDropdown = (props) => {
  return (
    <div className={classes.menu}>
      <div
        className={classes.menuItem}
        onClick={() => {
          props.filterClick(true);
        }}
      >
        <h3>Veg</h3>
      </div>

      <div
        className={classes.menuItem}
        onClick={() => {
          props.filterClick(false);
        }}
      >
        <h3>Non Veg</h3>
      </div>
    </div>
  );
};

export default FilterDropdown;
