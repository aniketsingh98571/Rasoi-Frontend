import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../../context/CartContext";

const CartItem = (props) => {
  const { addToCart, setItem, item, removeFromCart } = useContext(CartContext);

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
  };

  const handleDecClick = (e) => {
    e.preventDefault();
    // console.log(props.name);
    setItem(
      (item.id = props.id),
      (item.dishName = props.name),
      (item.dishQty = 1),
      (item.dishType = props.dishType),
      (item.dishPrice = props.dishPrice)
    );

    removeFromCart();
    setItem({
      id: "",
      dishName: "",
      dishQty: 1,
      dishType: "",
      dishPrice: "",
    });
  };

  return (
    <div className={classes.cartCard}>
      <div className={classes.itemName}>{props.itemName}</div>
      {/* <div className={classes.itemType}> */}
      {props.type === "Veg" ? (
        <div className={classes.vItemType}>
          <i className={`fa-solid fa-circle ${classes.vegType}`}></i>
        </div>
      ) : (
        <div className={classes.nItemType}>
          <i className={`fa-solid fa-circle ${classes.nVegType}`}></i>
        </div>
      )}
      <div className={classes.quantity}>
        <button onClick={handleDecClick}>-</button>
        <p>{props.quantity}</p>
        <button onClick={handleAddClick}>+</button>
      </div>
      <div className={classes.itemPrice}>
        <i className="fa-solid fa-indian-rupee-sign"></i>
        {props.price * props.quantity}
      </div>
    </div>
  );
};

export default CartItem;
