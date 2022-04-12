import React from "react";
import MenuFilter from "./MenuFilter";
import classes from "./Nav.module.css";

const Nav = (props) => {
  const orderClicked = () => {
    props.setOrderClick(true);
  };

  const contactClicked = () => {
    props.setOrderClick(false);
  };
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <div
          className={
            props.orderClick === true
              ? `${classes.orderOnline} ${classes.orderOnlineSelected}`
              : `${classes.orderOnline}`
          }
          onClick={orderClicked}
        >
          Order Online
        </div>
        <div
          className={
            props.orderClick === false
              ? `${classes.contact} ${classes.contactSelected}`
              : `${classes.contact}`
          }
          onClick={contactClicked}
        >
          Contact
        </div>
      </div>
      {props.orderClick && (
        <MenuFilter
          special={props.special}
          setSpecial={props.setSpecial}
          general={props.general}
          setGeneral={props.setGeneral}
          res={props.res}
        />
      )}
    </div>
  );
};

export default Nav;
