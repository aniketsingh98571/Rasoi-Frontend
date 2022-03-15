import CartContext from "./CartContext";
import { useState, useEffect } from "react";

const CartState = (props) => {
  let [cart, setCart] = useState([]);
  const [item, setItem] = useState({
    id: "",
    dishName: "",
    dishType: "",
    dishQty: "",
    dishPrice: "",
  });
  // let newCart = [];

  useEffect(() => {
    // console.log(cart, "Cart");
  }, [cart]);

  const addToCart = async () => {
    const itemExist = cart.find((product) => product.id === item.id);

    if (itemExist) {
      console.log("In if");
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...itemExist, dishQty: itemExist.dishQty + 1 }
            : product
        )
      );
    } else {
      console.log("inElse");
      setCart([...cart, { ...item, dishQty: 1 }]);
    }

    // newCart = [...cart, item];
    // console.log(newCart, "New CArt");
    // setCart(cart.concat(newCart));
    // setCart(newCart);
    // console.log(cart);
    // setCart([...cart, item]);
    // setCart(cart.concat(item));
    // console.log(cart);
  };

  const removeFromCart = () => {
    const itemExist = cart.find((product) => product.id === item.id);

    if (itemExist.dishQty === 1) {
      setCart(cart.filter((product) => product.id !== item.id));
    } else {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...itemExist, dishQty: itemExist.dishQty - 1 }
            : product
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cart, setCart, setItem, item, removeFromCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartState;
