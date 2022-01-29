import React from "react";
import classes from "./Dropdown.module.css";
// import axios from "axios";

const Dropdown = () => {
  const filterClick = () => {
    //GET request
    // axios
    //   .get("http://localhost:8080/seller/getSellerConfig", {
    //     params: {
    //       sellerID: sellerID,
    //     },
    //   })
    //   .then(function (response) {
    //     setResponse({
    //       generalDishesCount: response.data.generalDishesCount,
    //       message: response.data.message,
    //       mobileNo: response.data.mobileNo,
    //       sellerName: response.data.sellerName,
    //       specialDishesCount: response.data.specialDishesCount,
    //     });
    //   })
    //   .catch(function (error) {
    //     if (error.response.status === 403) {
    //       localStorage.removeItem("SellerId");
    //       window.location.href = "/SellerSignIn";
    //     }
    //     if (error.response.status === 409) {
    //       window.location.href = "/SellerSignUp";
    //     }
    //   });
  };
  //filter with params
  return (
    <div className={classes.menu}>
      <div className={classes.menuItem} onClick={filterClick}>
        <h3>Top Rated</h3>
      </div>

      <div className={classes.menuItem} onClick={filterClick}>
        <h3>Least Rated</h3>
      </div>
    </div>
  );
};

export default Dropdown;
