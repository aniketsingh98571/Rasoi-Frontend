import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.links}>
        <a href="/Home" target={"_new"}>
          <div className={classes.linkItem}>Home</div>
        </a>
        <a href="/Home" target={"_new"}>
          <div className={classes.linkItem}>Service Agreement</div>
        </a>
        <a href="/Home" target={"_new"}>
          <div className={classes.linkItem}>Terms and Conditions</div>
        </a>
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

      <div className={classes.mapDiv}>
        <iframe
          title="City Map"
          className={classes.cityMap}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26415129192!2d73.73343985058804!3d19.991110621372275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1642330581400!5m2!1sen!2sin"
          style={{
            width: "600",
            height: "450",
            border: 0,
          }}
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
