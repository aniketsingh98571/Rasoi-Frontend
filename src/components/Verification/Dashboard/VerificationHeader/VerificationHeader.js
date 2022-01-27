import React, { useState } from "react";
import Logo from "../../../../assets/images/logo.png";
import classes from "./VerificationHeader.module.css";
import Dropdown from "./Dropdown.js";

const VerificationHeader = () => {
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

        <div className={classes.Name}>
          <p>Somesh Lad</p>
        </div>

        <div className={classes.user} onClick={handleUserClick}>
          {/* <div className={classes.avatar}>
            <i className="fas fa-user-circle"></i>
          </div> */}
          <div className={classes.dropdown}>
            <i className="fas fa-angle-down"></i>
          </div>
          {clickStatus && <Dropdown />}
        </div>
      </div>
    </div>
  );
};

export default VerificationHeader;
