import React from "react";
import ConsumerHeader from "../ConsumerHeader/ConsumerHeader";
import Intro from "./Intro/Intro";
import Menu from "./Menu/MenuList/Menu";
// import MenuItem from "./Menu/MenuList/MenuItem";
import Nav from "./Nav/Nav";

const SellerMenu = () => {
  return (
    <div>
      <ConsumerHeader />
      <Intro />
      <Nav />
      <Menu />
      {/* <Cart /> */}
      {/* <MenuItem /> */}
    </div>
  );
};

export default SellerMenu;
