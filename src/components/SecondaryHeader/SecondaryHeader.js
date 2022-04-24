import React, { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import classes from "./SecondaryHeader.module.css";
import Logo from "../../assets/images/logo.png";
import Dropdown from "./Dropdown.js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import userHeader from "../../assets/images/userHeader.jpg";

const SecondaryHeader = (props) => {
  const { cart } = useContext(CartContext);
  const [clickStatus, setclickStatus] = useState(false);

  // console.log(props.img);

  const handleUserClick = (e) => {
    // alert("UserIcon clicked");
    setclickStatus(!clickStatus);
  };

  // document.addEventListener("mousedown", (e) => {
  //   if (clickStatus === true) {
  //     setclickStatus(!clickStatus);
  //   }
  // });

  const handleCartClick = (e) => {
    // alert("The cart icon was clicked");
    if (cart.length === 0) {
      toast.warn("The Cart is Empty!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      localStorage.setItem("sellerID", localStorage.getItem("cartSellerID"));
      localStorage.setItem(
        "sellerName",
        localStorage.getItem("cartSellerName")
      );
      window.location.href = "/sellerMenu";
    }
  };

  const uimg = localStorage.getItem("img");
  return (
    <>
      <div className={classes.container}>
        <Link to="/Home" className={classes.logo}>
          <img src={Logo} alt="logo" />
        </Link>

        <div className={classes.user} onClick={handleUserClick}>
          {uimg === "null" || uimg === undefined ? (
            <div className={classes.avatar}>
              <img src={userHeader} alt="" />
            </div>
          ) : (
            <div className={classes.avatar}>
              <img src={`http://104.43.237.82/${uimg}`} alt="" />
            </div>
          )}

          <div className={classes.dropdown}>
            <i className="fas fa-angle-down"></i>
          </div>
        </div>

        {/* <Link to="/cart"> */}
        <div className={classes.cartArea} onClick={handleCartClick}>
          <div className={classes.cart}>
            <div className={classes.cartIcon}>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
          <div className={classes.count}>
            <p>{cart.length}</p>
          </div>
        </div>
        {/* </Link> */}
      </div>
      {clickStatus && <Dropdown />}
    </>
  );
};

export default SecondaryHeader;
