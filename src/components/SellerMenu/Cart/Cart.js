import React, { useEffect, useContext } from "react";
import CartContext from "../../../context/CartContext";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
// import { useNavigate } from "react-router-dom";

const Cart = () => {
  // let navigate = useNavigate();

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

  const { cart, sellerName } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (price, product) => price + product.dishQty * product.dishPrice,
    0
  );

  const handleSellerClick = () => {
    localStorage.setItem("sellerID", localStorage.getItem("cartSellerID"));
    localStorage.setItem("sellerName", localStorage.getItem("cartSellerName"));
    // navigate("/sellerMenu");
    window.location.href = "/sellerMenu";
  };

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.Container} id="cont">
      <h2 className={classes.cartHead} id="chead">
        Cart
      </h2>
      <div className={classes.cartContainer} id="ccontain">
        {cart.length === 0 && (
          <div className={classes.emptyCart}>The Cart is Empty</div>
        )}
        {cart.map((item) => {
          return (
            <CartItem
              key={item.dishName}
              id={item.id}
              itemName={item.dishName}
              quantity={item.dishQty}
              price={item.dishPrice}
              type={item.dishType}
            />
          );
        })}

        <div className={classes.subTotal}>
          <p>Seller Name:</p>
          <p>
            <span onClick={handleSellerClick} className={classes.sellerName}>
              {sellerName}
            </span>
          </p>
        </div>
        <div className={classes.subTotal}>
          <p>Sub Total:</p>
          <p>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {totalPrice}
          </p>
        </div>
        <div className={classes.chkoutBtn}>
          <p>Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
