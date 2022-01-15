import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.links}>
        <div className={classes.linkItem}>Home</div>
        <div className={classes.linkItem}>Service</div>
        <div className={classes.linkItem}>Terms and Conditions</div>
      </div>

      <div className={classes.contact}>
        <div className={classes.phone}>
          <i className="fas fa-phone-alt"></i>
          <p>1234567890</p>
        </div>
        <div className={classes.email}>
          <i className="fas fa-envelope"></i>
          <p>support@rasoi.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
