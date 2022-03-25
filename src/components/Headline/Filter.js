import React, { useState } from "react";
import classes from "./Filter.module.css";
import Dropdown from "./Dropdown.js";

const Filter = (props) => {
  const [clickStatus, setclickStatus] = useState(false);
  const handleFilterClick = () => {
    setclickStatus(!clickStatus);
  };
  return (
    <div className={classes.headline}>
      <div className={classes.headingText}>
        <h2>Sellers in Nashik</h2>
      </div>
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
      {clickStatus && (
        <Dropdown
          Sellers={props.Sellers}
          setSellers={props.setSellers}
          setClickStatus={setclickStatus}
        />
      )}
    </div>
  );
};

export default Filter;
