import React, { useState } from "react";
import classes from "./RequestCard.module.css";
import axios from "axios";

const RequestCard = (props) => {
  const [validate, setValidate] = useState({ id: "", action: "" });
  const handleVerify = () => {
    setValidate({ id: `${props.sellerID}`, action: "true" });
    ///POST/PUT request
    console.log(validate);
    axios
      .put("http://localhost:8080/validator/validateSeller", validate)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // alert(`Seller with ID ${props.sellerID} marked as verified!`);
  };

  const handleReject = () => {
    //DELETE request
    // axios.delete(URL, {
    //   headers: {
    //     Authorization: authorizationToken
    //   },
    //   data: {
    //     source: source
    //   }
    // });
    //mark the seller as rejected
    alert(`Seller with ID ${props.sellerID} rejected!`);
  };
  return (
    <div className={classes.card}>
      <div className={classes.imageDiv}>
        <div className={classes.sellerImage}>
          <img src={`http://localhost:8000/${props.sellerImg}`} alt="seller" />
          <figcaption>Seller Image</figcaption>
        </div>
        <div className={classes.panImage}>
          <img src={`http://localhost:8000/${props.sellerPan}`} alt="pan" />
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
