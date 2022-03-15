import React from "react";
import classes from "./RequestCard.module.css";
import axios from "axios";

const RequestCard = (props) => {
  const handleVerify = () => {
    console.log("Before", props.sellerID);

    ///POST/PUT request
    axios
      .put("http://localhost:8080/validator/validateSeller", {
        id: props.sellerID,
        action: "true",
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          props.Update(props.sellerID);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // alert(`Seller with ID ${props.sellerID} marked as verified!`);
  };

  const handleReject = () => {
    // setValidate({ id: props.sellerID, action:"false" });
    axios
      .put("http://localhost:8080/validator/validateSeller", {
        id: props.sellerID,
        action: "false",
      })
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          props.Update(props.sellerID);
        }
        // props.Update(props.sellerID);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={classes.card}>
      <div className={classes.imageDiv}>
        <div className={classes.sellerImage}>
          <img src={`http://localhost:8080/${props.sellerImg}`} alt="seller" />
          <figcaption>Seller Image</figcaption>
        </div>
        <div className={classes.panImage}>
          <img src={`http://localhost:8080/${props.sellerPan}`} alt="pan" />
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
          <div className={classes.markVerified} onClick={handleVerify}>
            <p>Mark as Verified</p>
          </div>
          <div className={classes.reject} onClick={handleReject}>
            <p>Reject</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
