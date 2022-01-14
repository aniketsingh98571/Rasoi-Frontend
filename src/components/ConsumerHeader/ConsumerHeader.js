import React, { useState } from "react";
import classes from "./ConsumerHeader.module.css";
import Logo from "../../assets/images/logo.png";
import Dropdown from "./Dropdown.js";

const ConsumerHeader = () => {
  const [clickStatus, setclickStatus] = useState(false);
  const [search, setsearch] = useState({ searchInput: "" });

  const handleUserClick = (e) => {
    // alert("UserIcon clicked");
    setclickStatus(!clickStatus);
  };

  const handleSearchInput = (e) => {
    setsearch({ ...search, [e.target.name]: e.target.value });
    // setNote({ ...note, [e.target.name]: e.target.value })
    console.log(search.searchInput);
  };

  const handleSearchIconClick = (e) => {
    alert("Search Icon was clicked");
  };

  const handleCartClick = (e) => {
    alert("The cart icon was clicked");
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
        </div>

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

        <div className={classes.cartArea} onClick={handleCartClick}>
          <div className={classes.cart}>
            <div className={classes.cartIcon}>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>
      {clickStatus && <Dropdown />}
    </>
  );
};

export default ConsumerHeader;
