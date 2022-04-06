import React from "react";
import classes from "./Loader.module.css";
import loader2 from "../../assets/images/loading2.svg";
// import loader1 from "../../assets/images/loading1.gif";

const Loader = () => {
  return (
    <div className={classes.Loader}>
      {/* <img className={classes.load1} src={loader1} alt="" /> */}
      <img className={classes.load2} src={loader2} alt="" />
    </div>
  );
};

export default Loader;
