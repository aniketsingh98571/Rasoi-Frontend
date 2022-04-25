// import React, { useState } from "react";
import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";
import Cart from "../../Cart/Cart";
const Menu = (props) => {

  return (
    <>
      {props.special.length !== 0 && (
        <div className={classes.menuCard}>
          <div className={classes.heading}>
            <p>Speciality</p>
          </div>
          {props.special.map((mitem) => {
            return (
              <MenuItem
                key={mitem._id}
                id={mitem._id}
                dishImg={mitem.imageURL}
                name={mitem.name}
                dishType={mitem.type}
                dishPrice={mitem.price}
                dishTime={mitem.timeReq}
                dishQty={mitem.dishQty}
                // handleAddClick={handleAddClick}
              />
            );
          })}
        </div>
      )}

      {props.general.length !== 0 && (
        <div className={classes.menuCard}>
          <div className={classes.heading}>
            <p>Other Dishes</p>
          </div>
          {props.general.map((mitem) => {
            return (
              <MenuItem
                key={mitem._id}
                id={mitem._id}
                dishImg={mitem.imageURL}
                name={mitem.name}
                dishType={mitem.type}
                dishPrice={mitem.price}
                dishTime={mitem.timeReq}
              />
            );
          })}
        </div>
      )}
      <Cart />
    </>
  );
};

export default Menu;
