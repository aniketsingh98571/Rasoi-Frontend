import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <p>
          <i className="fa-solid fa-mobile-screen"></i>1234567890
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i>seller@mail.com
        </p>
        <p>
          <i className="fa-solid fa-location-dot"></i>Seller Name, building xyz,
          pqr area, Nashik
        </p>
      </div>
      <div className={classes.map}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.7858100755657!2d73.74171926437096!3d19.97550802827324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec9f13b44645%3A0x17813ee94d195074!2sSiddhtek%20Nagar%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647549046794!5m2!1sen!2sin"
          loading="lazy"
          style={{
            width: "100%",
            margin: "0 auto",
            height: "100%",
            border: 0,
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
