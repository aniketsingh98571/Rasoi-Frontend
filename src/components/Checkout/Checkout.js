import React, { useState, useContext } from "react";
import ConsumerHeader from "../ConsumerHeader/ConsumerHeader";
import classes from "./Checkout.module.css";
import CheckoutCard from "./CheckoutCard";
import CartContext from "../../context/CartContext";

const Checkout = () => {
  const { setCart } = useContext(CartContext);
  const [placed, setPlaced] = useState(false);
  const [disable, setDisable] = useState(false);

  const handlePlaceClick = () => {
    setDisable(true);
    window.location.href = "#divID";
    console.log(disable);
    setTimeout(() => {
      setPlaced(true);
      setCart([]);
    }, 3000);
  };

  return (
    <div id="main">
      <ConsumerHeader />
      <div className={classes.heading}>Checkout</div>
      <div className={classes.container} id="cont">
        <div className={classes.left}>
          <p className={classes.head}>Your Details</p>

          <div className={classes.details}>
            <p className={classes.detailItem}>Joginder Chauhan</p>
            <p className={classes.detailItem}>
              Rajshree Blossom, Flat No 21, Siddhatek Nagar, Kamathwada, 422009
            </p>
          </div>
          <div className={classes.pay}>
            <p>
              <i className="fa-solid fa-money-bill-wave"></i>Pay On Delivery
            </p>
          </div>
        </div>

        <div className={classes.right}>
          <p className={classes.head}>Summary</p>
          <div className={classes.summary}>
            <CheckoutCard
              placed={placed}
              setPlaced={setPlaced}
              handlePlaceClick={handlePlaceClick}
              disable={disable}
            />
          </div>
        </div>
      </div>

      {placed === true ? (
        <div className={classes.placed} id="divID">
          {placed && <p>Order Placed</p>}
        </div>
      ) : (
        <div className={classes.placedFalse} id="divID">
          {/* {placed && <p>Order Placed</p>} */}
        </div>
      )}
    </div>
  );
};

export default Checkout;
