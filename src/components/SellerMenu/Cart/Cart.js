import React, { useEffect, useContext } from "react";
import CartContext from "../../../context/CartContext";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  // const Items = [
  //   // {
  //   //   name: "Dish 1",
  //   //   qty: 2,
  //   //   price: 150,
  //   // },
  //   // {
  //   //   name: "Dish 2",
  //   //   qty: 1,
  //   //   price: 180,
  //   // },
  //   // {
  //   //   name: "Dish 3",
  //   //   qty: 1,
  //   //   price: 180,
  //   // },
  //   // {
  //   //   name: "Dish 4",
  //   //   qty: 1,
  //   //   price: 180,
  //   // },
  //   // {
  //   //   name: "Dish 5",
  //   //   qty: 1,
  //   //   price: 180,
  //   // },
  //   // {
  //   //   name: "Dish 6",
  //   //   qty: 1,
  //   //   price: 180,
  //   // },
  // ];

  const { cart } = useContext(CartContext);
  const handleScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 395) {
      const ele1 = document.getElementById("chead");
      const ele2 = document.getElementById("ccontain");
      ele1.style.position = "fixed";
      ele1.style.top = "3vh";
      ele2.style.position = "fixed";
      ele2.style.top = "8vh";
    } else if (window.scrollY < 399) {
      const ele1 = document.getElementById("chead");
      const ele2 = document.getElementById("ccontain");
      ele1.style.position = "fixed";
      ele1.style.top = "64vh";
      ele2.style.position = "fixed";
      ele2.style.top = "68vh";
      ele1.style.transition = "0.7s";
      ele2.style.transition = "0.7s";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // document.getElementById("ccontain").style.height = "min-content";
  }, []);

  return (
    <div className={classes.Container} id="cont">
      <h2 className={classes.cartHead} id="chead">
        Cart
      </h2>
      <div className={classes.cartContainer} id="ccontain">
        {cart.map((item) => {
          return (
            <CartItem
              key={item.dishName}
              id={item.id}
              itemName={item.dishName}
              quantity={item.dishQty}
              price={item.dishPrice}
            />
          );
        })}
        <div className={classes.chkoutBtn}>
          <p>Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
