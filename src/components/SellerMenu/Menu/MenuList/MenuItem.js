import React, { useContext } from "react";
// import { useState } from "react";
import classes from "./MenuItem.module.css";
import CartContext from "../../../../context/CartContext";

const MenuItem = (props) => {
  const { addToCart, setItem, item } = useContext(CartContext);
  // const [item, setItem] = useState({
  //   dishName: "",
  //   dishQty: 1,
  //   dishType: "",
  //   dishPrice: "",
  // });

  // const initialState = [];
  // let [cart, setCart] = useState(initialState);
  // let cart = [];

  // const handleCart = (cartItem) => {
  //   setCart((prevCart) => {
  //     const newCart = [...prevCart];
  //     newCart.unshift({
  //       dishName: cartItem.dishName,
  //       dishPrice: cartItem.dishPrice,
  //       dishQty: cartItem.dishQty,
  //       dishType: cartItem.dishType,
  //     });
  //   });
  // };

  const handleAddClick = (e) => {
    e.preventDefault();
    // console.log(props.name);
    setItem(
      (item.id = props.id),
      (item.dishName = props.name),
      (item.dishQty = 1),
      (item.dishType = props.dishType),
      (item.dishPrice = props.dishPrice)
    );

    addToCart();
    setItem({
      id: "",
      dishName: "",
      dishQty: 1,
      dishType: "",
      dishPrice: "",
    });

    // const itemExist = cart.find((product) => product.id === item.id);
    // if (itemExist) {
    //   console.log("In if");
    //   setItem({ ...itemExist, dishQty: item.dishQty + 1 });
    //   addToCart();
    // } else {
    //   console.log("inElse");
    // }
    // console.log(item);
  };

  // const handleAdd = (item) => {
  //   // setItem(
  //   //   (item.dishName = props.dishName),
  //   //   (item.dishQty = 1),
  //   //   (item.dishType = props.dishType),
  //   //   (item.dishPrice = props.dishPrice)
  //   // );
  //   setItem(item, [...cart]);
  //   // let newcart = [...cart, item];
  //   // newcart = +item;
  //   setCart(item);

  //   console.log(item);
  //   console.log(cart);

  //   // setCart(cart.push(item));
  //   setItem({
  //     dishName: "",
  //     dishQty: 1,
  //     dishType: "",
  //     dishPrice: "",
  //   });

  //   addToCart(item.dishName, item.dishQty, item.dishType, item.dishPrice);
  // };

  return (
    <div className={classes.card}>
      <div className={classes.dishImg}>
        <img src={props.dishImg} alt="food" />
      </div>

      <div className={classes.dishDetails}>
        <div className={classes.dishNameType}>
          <p className={classes.dishName}>{props.name}</p>
          <p className={classes.dishType}>{props.dishtype}</p>
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
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
