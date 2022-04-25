import React, { useContext } from "react";
// import { useState } from "react";
import classes from "./MenuItem.module.css";
import CartContext from "../../../../context/CartContext";
import { toast } from "react-toastify";

const MenuItem = (props) => {
  const {
    addToCart,
    setItem,
    item,
    cart,
    setCartSellerID,
    cartSellerID,
    setSellerName,
  } = useContext(CartContext);
  let menuSellerID, menuSellerName;

  const handleAddClick = (id) => {
    // e.preventDefault();
    // console.log(props.name);

    setItem(
      (item.id = props.id),
      (item.dishName = props.name),
      (item.dishQty = 1),
      (item.dishType = props.dishType),
      (item.dishPrice = props.dishPrice)
    );

    menuSellerID = localStorage.getItem("sellerID");
    menuSellerName = localStorage.getItem("sellerName");
    if (cart.length === 0) {
      setCartSellerID(menuSellerID);
      setSellerName(menuSellerName);
      addToCart();
    } else if (cartSellerID === menuSellerID) {
      addToCart();
    } else {
      console.log("in ELse");
      toast.warn("You cannot order from multiple sellers at the same time!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    // addToCart();
    setItem({
      id: "",
      dishName: "",
      dishQty: 1,
      dishType: "",
      dishPrice: "",
    });

   
  };



  return (
    <>
      <div className={classes.card}>
        <div className={classes.dishImg}>
          <img src={`http://104.43.237.82/${props.dishImg}`} alt="food" />
        </div>

        <div className={classes.dishDetails}>
          <div className={classes.dishNameType}>
            <p className={classes.dishName}>{props.name}</p>
            {props.dishType === "Veg" ? (
              <p className={classes.vDishType}>
                <i className={`fa-solid fa-circle ${classes.vegType}`}></i>
              </p>
            ) : (
              <p className={classes.nDishType}>
                <i className={`fa-solid fa-circle ${classes.nVegType}`}></i>
              </p>
            )}
          </div>
          <div className={classes.dishTime}>
            <i className="fa-solid fa-clock"></i>
            <p>{props.dishTime} Mins</p>
          </div>
          <div className={classes.dishPrice}>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <p>{props.dishPrice}</p>
          </div>
        </div>

        <div className={classes.addBtn}>
          <button
            onClick={() => {
              handleAddClick(props.id);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
