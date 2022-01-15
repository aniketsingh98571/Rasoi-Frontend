import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import Dropdown from "./Dropdown.js";
import classes from "./SellerHeader.module.css";

const SellerHeader = () => {
  const [clickStatus, setclickStatus] = useState(false);
  const handleUserClick = (e) => {
    // alert("UserIcon clicked");
    setclickStatus(!clickStatus);
  };
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
        </div>

        <div className={classes.user} onClick={handleUserClick}>
          <div className={classes.avatar}>
            <i className="fas fa-user-circle"></i>
          </div>
          <div className={classes.dropdown}>
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
      </div>
      {clickStatus && <Dropdown />}
    </div>
  );
};

export default SellerHeader;
