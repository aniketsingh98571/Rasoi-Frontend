import React from "react";
import classes from "./CheckoutItem.module.css";

const CheckoutItem = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.name}>{props.itemName}</div>
      {props.type === "Veg" ? (
        <div className={classes.vItemType}>
          <i className={`fa-solid fa-circle ${classes.vegType}`}></i>
        </div>
      ) : (
        <div className={classes.nItemType}>
          <i className={`fa-solid fa-circle ${classes.nVegType}`}></i>
        </div>
      )}
      <div className={classes.qty}>{props.quantity}</div>
      <div className={classes.itemPrice}>
        <i className="fa-solid fa-indian-rupee-sign"></i>
        {props.price * props.quantity}
      </div>
    </div>
  );
};

export default CheckoutItem;
