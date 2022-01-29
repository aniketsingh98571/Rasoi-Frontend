import React, { useState } from "react";
import classes from "./ConsumerHeader.module.css";
import Logo from "../../assets/images/logo.png";
import Dropdown from "./Dropdown.js";
import { Link } from "react-router-dom";

const ConsumerHeader = () => {
  const [clickStatus, setclickStatus] = useState(false);
  const [search, setsearch] = useState({ searchInput: "" });

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
    console.log(search.searchInput);
  };

  const handleSearchIconClick = (e) => {
    alert("Search Icon was clicked");
  };

  const handleCartClick = (e) => {
    // alert("The cart icon was clicked");
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
            />
            <div className={classes.searchIcon} onClick={handleSearchIconClick}>
              <i className="fas fa-search"></i>
              {/* <span>s</span> */}
            </div>
          </div>
        </div>

        <div className={classes.user} onClick={handleUserClick}>
          <div className={classes.avatar}>
            <i className="fas fa-user-circle"></i>
          </div>
          <div className={classes.dropdown}>
            <i className="fas fa-angle-down"></i>
          </div>
        </div>

        {/* <Link to="/cart"> */}
        <Link to="/cart" className={classes.cartArea} onClick={handleCartClick}>
          <div className={classes.cart}>
            <div className={classes.cartIcon}>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
          <div className={classes.count}>
            <p>0</p>
          </div>
        </Link>
        {/* </Link> */}
      </div>
      {clickStatus && <Dropdown />}
    </>
  );
};

export default ConsumerHeader;
