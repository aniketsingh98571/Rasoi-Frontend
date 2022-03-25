import React from "react";
import classes from "./Intro.module.css";

const Intro = () => {
  const sellerName = localStorage.getItem("sellerName");
  return (
    <div className={classes.Intro}>
      <div className={classes.selllerImage}>
        <img
          src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
          alt="sellerImage"
        />
      </div>
      <div className={classes.sellerDetail}>
        <p id={classes.name} className={classes.details}>
          {sellerName}
        </p>
        <p id={classes.special} className={classes.details}>
          Special Dishes
        </p>
        <p id={classes.address} className={classes.details}>
          Address of Seller
        </p>
      </div>
      <div className={classes.lastDiv}>
        <div className={classes.rating}>
          <p className={classes.rate}>4.5</p>
          <div className={classes.starDiv}>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className={classes.socials}>
          <i className="fa-brands fa-facebook-square" id={classes.fb}></i>
          <i className="fa-brands fa-instagram" id={classes.insta}></i>
        </div>
      </div>
    </div>
  );
};

export default Intro;
