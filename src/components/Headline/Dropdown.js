import React from "react";
import classes from "./Dropdown.module.css";
import axios from "axios";

const Dropdown = (props) => {
  const filterClick = (state) => {
    axios
      .get("http://localhost:8080/consumer/filter", {
        params: {
          consumerID: localStorage.getItem("ConsumerId"),
          order: state,
        },
      })
      .then(function (res) {
        // console.log(res);
        props.setClickStatus(false);
        props.setSellers(res.data.sellers);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //filter with params
  return (
    <div className={classes.menu}>
      <div
        className={classes.menuItem}
        onClick={() => {
          filterClick(false);
        }}
      >
        <h3>Top Rated</h3>
      </div>

      <div
        className={classes.menuItem}
        onClick={() => {
          filterClick(true);
        }}
      >
        <h3>Least Rated</h3>
      </div>
    </div>
  );
};

export default Dropdown;
