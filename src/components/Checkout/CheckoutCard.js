import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import classes from "./CheckoutCard.module.css";
import CheckoutItem from "./CheckoutItem";
import { toast } from "react-toastify";

const CheckoutCard = (props) => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (price, product) => price + product.dishQty * product.dishPrice,
    0
  );

  // const handlePlaceClick = () => {
  //   // props.placedClick();
  //   props.setPlaced(true);
  // };

  console.log(props.disable);

  return (
    <div className={classes.checkoutCard}>
      {cart.length === 0 && (
        <div className={classes.emptyCart}>Nothing to Checkout!</div>
      )}
      {cart.map((item) => {
        return (
          <CheckoutItem
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
        <p>Sub Total:</p>
        <p>
          <i className="fa-solid fa-indian-rupee-sign"></i>
          {totalPrice}
        </p>
      </div>

      <div className={classes.placeButton}>
        <button
          onClick={() => {
            if (cart.length > 0) {
              props.handlePlaceClick(totalPrice);
            } else {
              toast.warn("Please add some items to checkout", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }
          }}
          disabled={props.disable}
          // onClick="#divID"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
