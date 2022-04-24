import React from "react";
import classes from "./Intro.module.css";

const Intro = (props) => {
  // console.log(props.info.name);
  // const sellerName = localStorage.getItem("sellerName");
  return (
    <div className={classes.Intro}>
      <div className={classes.selllerImage}>
        <img
          src={`http://104.43.237.82/${props.res.sellerInfo.img}`}
          alt="sellerImage"
        />
      </div>
      <div className={classes.sellerDetail}>
        <p id={classes.name} className={classes.details}>
          {props.res.sellerInfo.name}
        </p>
        <p id={classes.special} className={classes.details}>
          {props.res.specialDishes.specialDishesNames
            .toString()
            .replaceAll(",", ", ")}
        </p>
        <p id={classes.address} className={classes.details}>
          {props.res.sellerInfo.areaName}
        </p>
      </div>
      <div className={classes.lastDiv}>
        <div className={classes.rating}>
          <p className={classes.rate}>{props.res.sellerInfo.rating}</p>
          <div className={classes.starDiv}>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className={classes.socials}>
          <a href={props.res.sellerInfo.facebook}>
            <i className="fa-brands fa-facebook-square" id={classes.fb}></i>
          </a>
          <a href={props.res.sellerInfo.facebook}>
            <i
              href={props.res.sellerInfo.instagram}
              className="fa-brands fa-instagram"
              id={classes.insta}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
