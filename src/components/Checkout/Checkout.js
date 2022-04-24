import React, { useState, useContext, useEffect } from "react";
import classes from "./Checkout.module.css";
import CheckoutCard from "./CheckoutCard";
import CartContext from "../../context/CartContext";
import Loader from "../Loader/Loader";
import axios from "axios";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [placed, setPlaced] = useState(false);
  const [disable, setDisable] = useState(false);
  let consumerData = JSON.parse(localStorage.getItem("consumerData"));

  useEffect(() => {
    let ConsumerId = localStorage.getItem("ConsumerId");
    if (ConsumerId === null) {
      window.location.href = "/";
    }
    //eslint-disable-next-line
  }, []);

  const handlePlaceClick = (totalPrice) => {
    setLoading(true);
    setDisable(true);

    window.location.href = "#divID";

    setPlaced(true);
    localStorage.setItem("order", JSON.stringify(cart));
    setCart([]);

    axios
      .post("http://13.89.1.212/consumer/placeOrder", {
        consumerID: localStorage.getItem("ConsumerId"),
        sellerID: localStorage.getItem("cartSellerID"),
        totalCost: totalPrice,
        dishes: cart,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <div id="main" className={classes.main}>
      <SecondaryHeader />
      <div className={classes.heading}>Checkout</div>
      <div className={classes.container} id="cont">
        <div className={classes.left}>
          <p className={classes.head}>Your Details</p>

          <div className={classes.details}>
            <p className={classes.detailItem}>
              {localStorage.getItem("ConsumerId")
                ? consumerData.consumerName
                : ""}
            </p>
            <p className={classes.detailItem}>
              {localStorage.getItem("ConsumerId")
                ? consumerData.consumerAddress
                : ""}
            </p>
          </div>
          <div className={classes.pay}>
            <p>
              <i className="fa-solid fa-money-bill-wave"></i>Pay On Delivery
            </p>
          </div>
        </div>

        <div className={classes.right}>
          {/* <p>Summary</p> */}
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
      {loading && <Loader />}
    </div>
  );
};

export default Checkout;
