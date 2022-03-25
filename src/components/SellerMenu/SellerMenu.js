import React, { useState } from "react";
import ConsumerHeader from "../ConsumerHeader/ConsumerHeader";
import Contact from "./Contact/Contact";
import Intro from "./Intro/Intro";
import Menu from "./Menu/MenuList/Menu";
// import MenuItem from "./Menu/MenuList/MenuItem";
import Nav from "./Nav/Nav";

const SellerMenu = () => {
  const [orderClick, setOrderClick] = useState(true);
  return (
    <div>
      <ConsumerHeader />
      <Intro />
      <Nav orderClick={orderClick} setOrderClick={setOrderClick} />
      {orderClick === true ? <Menu /> : <Contact />}
      {/* <Cart /> */}
      {/* <MenuItem /> */}
    </div>
  );
};

export default SellerMenu;
