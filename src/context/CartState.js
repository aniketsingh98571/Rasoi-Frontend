import CartContext from "./CartContext";
import { useState, useEffect } from "react";
let localCart = JSON.parse(localStorage.getItem("cart") || "[]");
let cartSellerName = localStorage.getItem("cartSellerName") || "";
let sellerIdFromCart = localStorage.getItem("cartSellerID");

const CartState = (props) => {
  let [cart, setCart] = useState(localCart);
  const [cartSellerID, setCartSellerID] = useState(sellerIdFromCart);
  const [sellerName, setSellerName] = useState(cartSellerName);
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
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartSellerID", cartSellerID);
    localStorage.setItem("cartSellerName", sellerName);
  }, [cart, cartSellerID, sellerName]);

  const addToCart = async () => {
    const itemExist = cart.find((product) => product.id === item.id);

    if (itemExist) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...itemExist, dishQty: itemExist.dishQty + 1 }
            : product
        )
      );
    } else {
      // setCart([...cart, { ...item, dishQty: 1 }]);
      setCart([...cart, { ...item }]);
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
    if (cart.length === 0) {
      setCartSellerID(localStorage.getItem("sellerID"));
      setSellerName(localStorage.getItem("sellerName"));
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        setCart,
        setItem,
        item,
        removeFromCart,
        cartSellerID,
        setCartSellerID,
        setSellerName,
        sellerName,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartState;
