import React, { useState, useEffect } from "react";
import ConsumerHeader from "../ConsumerHeader/ConsumerHeader";
import Contact from "./Contact/Contact";
import Intro from "./Intro/Intro";
import Menu from "./Menu/MenuList/Menu";
import axios from "axios";
// import MenuItem from "./Menu/MenuList/MenuItem";
import Nav from "./Nav/Nav";
import Loader from "../Loader/Loader";

const SellerMenu = () => {
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState({});
  useEffect(() => {
    const sellerID = localStorage.getItem("sellerID");
    axios
      .get("http://localhost:8080/seller/sellerDashboard", {
        params: {
          sellerID: sellerID,
        },
      })
      .then(function (response) {
        setRes(response.data);
        setLoading(false);
        // localStorage.setItem("response", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    //eslint-disable-next-line
  }, []);

  console.log(res);
  const [orderClick, setOrderClick] = useState(true);
  return (
    <>
      {!loading && Object.keys(res).length !== 0 ? (
        <div>
          <ConsumerHeader />
          <Intro res={res} />
          <Nav orderClick={orderClick} setOrderClick={setOrderClick} />
          {orderClick === true ? <Menu res={res} /> : <Contact res={res} />}
        </div>
      ) : null}

      {loading ? <Loader /> : null}
    </>
  );
};

export default SellerMenu;
