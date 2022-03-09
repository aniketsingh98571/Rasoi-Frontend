import React from "react";
import classes from "./Dropdown.module.css";
const Dropdown = () => {
  const HandleLogOut=()=>{
    localStorage.removeItem('SellerId');
    window.location.href="/SellerSignIn"
  }
  return (
    <div className={classes.menu}>
      <div className={classes.menuItem} onClick={HandleLogOut}>
        <h3>Logout</h3>
      </div>
    </div>
  );
};

export default Dropdown;
