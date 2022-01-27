import React from "react";
import classes from "./RequestCard.module.css";

const RequestCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageDiv}>
        <div className={classes.sellerImage}>
          <img src={props.sellerImg} alt="seller" />
          <figcaption>Seller Image</figcaption>
        </div>
        <div className={classes.panImage}>
          <img src={props.sellerPan} alt="pan" />
          <figcaption>PAN Card</figcaption>
        </div>
      </div>

      <div className={classes.rightDiv}>
        <div className={classes.details}>
          <div className={classes.sellerName}>
            <p>Name of the Seller: {props.sellerName}</p>
          </div>
          <div className={classes.sellerMobile}>
            <p>Mobile Number of the Seller: {props.sellerMobile}</p>
          </div>
        </div>
        <div className={classes.buttonDiv}>
          <div className={classes.markVerified}>
            <p>Mark as Verified</p>
          </div>
          <div className={classes.reject}>
            <p>Reject</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
