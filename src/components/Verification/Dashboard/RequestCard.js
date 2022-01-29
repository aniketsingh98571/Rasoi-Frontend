import React from "react";
import classes from "./RequestCard.module.css";
// import axios from "axios";

const RequestCard = (props) => {
  const handleVerify = () => {
    //POST/PUT request
    // axios
    //   .put("http://localhost:8080/seller/fillSellerDetails")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //mark the request as verified
    alert(`Seller with ID ${props.sellerID} marked as verified!`);
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
