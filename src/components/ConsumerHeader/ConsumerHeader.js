import React from "react";
import classes from "./ConsumerHeader.module.css";
import Logo from "../../assets/images/logo.png";

const ConsumerHeader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={Logo} alt="logo" />
      </div>

      <div className={classes.search}>
        <div className={classes.searchInput}>
          <input
            type="text"
            name="searchInput"
            id="search"
            placeholder="Search for seller or food items..."
          />
          <div className={classes.searchIcon}>
            {/* <span className="fas fa-search">s</span> */}
            <span>s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerHeader;
