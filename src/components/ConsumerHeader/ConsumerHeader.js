import React, { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import classes from "./ConsumerHeader.module.css";
import Logo from "../../assets/images/logo.png";
import Dropdown from "./Dropdown.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import userHeader from "../../assets/images/userHeader.jpg";

const ConsumerHeader = (props) => {
  const { cart } = useContext(CartContext);
  const [clickStatus, setclickStatus] = useState(false);
  const [search, setsearch] = useState({ searchInput: "" });

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

  const handleSearchInput = (e) => {
    setsearch({ ...search, [e.target.name]: e.target.value });
    // setNote({ ...note, [e.target.name]: e.target.value })
    // console.log(search.searchInput);
  };

  const handleSearchIconClick = (e) => {
    if (search.searchInput.length > 0) {
      console.log(search);

      axios
        .get("http://localhost:8080/consumer/search", {
          params: {
            searchingString: search.searchInput,
          },
        })
        .then(function (response) {
          if (response.status === 404) {
            toast.error("Search Results NOT FOUND!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            // console.log(response);
            props.setSellers(response.data.sellerList);
          }
        })
        .catch(function (error) {
          if (error.response.status === 404) {
            toast.error("Search Results NOT FOUND!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    } else {
      toast.warn("Search Field cannot be empty", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

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

  return (
    <>
      <div className={classes.container}>
        <Link to="/Home" className={classes.logo}>
          <img src={Logo} alt="logo" />
        </Link>

        <div className={classes.search}>
          <div className={classes.searchInput}>
            <input
              type="text"
              name="searchInput"
              id="search"
              placeholder="Search for seller or food items..."
              onChange={handleSearchInput}
              value={search.searchInput}
              // onKeyDown={handleSearchIconPress}
              onKeyDown={(e) => e.key === "Enter" && handleSearchIconClick(e)}
            />
            <div
              className={classes.searchIcon}
              onClick={handleSearchIconClick}
              onKeyUp={handleSearchIconClick}
            >
              <i className="fas fa-search"></i>
              {/* <span>s</span> */}
            </div>
          </div>
        </div>

        <div className={classes.user} onClick={handleUserClick}>
          {props.img === "null" || props.img === undefined ? (
            <div className={classes.avatar}>
              <img src={userHeader} alt="" />
            </div>
          ) : (
            <div className={classes.avatar}>
              <img src={`http://localhost:8080/${props.uimg}`} alt="" />
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

export default ConsumerHeader;
