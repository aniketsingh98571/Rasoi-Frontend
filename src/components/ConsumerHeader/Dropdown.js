import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Dropdown.module.css";

const Dropdown = () => {
  let navigate = useNavigate();
  const handleProfileClick = (e) => {
    navigate("/ConsumerProfile");
  };
  const handleOrderClick = () => {
    navigate("/ConsumerProfile");
  };
  const handleLogoutClick = () => {
    localStorage.removeItem("ConsumerId");
    localStorage.removeItem("cart");
    localStorage.removeItem("sellerName");
    localStorage.removeItem("sellerID");
    localStorage.removeItem("cartSellerID");
    localStorage.removeItem("cartSellerName");
    localStorage.removeItem("img");
    localStorage.removeItem("order");
    localStorage.removeItem("consumerData");

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
