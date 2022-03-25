import React, { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import classes from "./MenuFilter.module.css";
// import Dropdown from "./Dropdown.js";

const MenuFilter = () => {
  const [clickStatus, setclickStatus] = useState(false);
  const handleFilterClick = () => {
    setclickStatus(!clickStatus);
  };
  return (
    <>
      <div className={classes.filterWrapper}>
        <div className={classes.filter} onClick={handleFilterClick}>
          <div className={classes.filterText}>
            <h3>Filter</h3>
          </div>
          <div className={classes.filterIcon}>
            <i className="fas fa-sliders-h"></i>
          </div>
        </div>
      </div>
      {clickStatus && <FilterDropdown />}
    </>
  );
};

export default MenuFilter;
