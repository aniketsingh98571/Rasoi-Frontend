import React from "react";
import classes from "./Heading.module.css";

const Heading = () => {
  return (
    <div className={classes.container}>
      <div className={classes.HeadingText}>
        <h3>Pending Requests</h3>
      </div>
    </div>
  );
};

export default Heading;
