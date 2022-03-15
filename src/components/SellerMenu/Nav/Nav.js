import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  const orderClicked = () => {
    console.log("order clicked");
  };

  const contactClicked = () => {
    console.log("contact clicked");
  };
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <div className={classes.orderOnline} onClick={orderClicked}>
          Order Online
        </div>
        <div className={classes.contact} onClick={contactClicked}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Nav;
