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
  const [special, setSpecial] = useState([]);
  const [general, setGeneral] = useState([]);
  useEffect(() => {
    const sellerID = localStorage.getItem("sellerID");
    axios
      .get("http://localhost:8080/seller/sellerDashboard", {
        params: {
          sellerID: sellerID,
        },
      })
      .then(function (response) {
        setLoading(true);
        setRes(response.data);
        setSpecial(response.data.specialDishes.specialDishes);
        setGeneral(response.data.generalDishes.generalDishes);
        setLoading(false);
        // localStorage.setItem("response", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    //eslint-disable-next-line
  }, []);

  console.log(res);

  // console.log("specials state", special);
  // console.log("general dishes", general);
  const [orderClick, setOrderClick] = useState(true);
  return (
    <>
      {(!loading && Object.keys(general).length !== 0) ||
      Object.keys(special).length !== 0 ? (
        <div>
          <ConsumerHeader />
          <Intro res={res} />
          <Nav
            orderClick={orderClick}
            setOrderClick={setOrderClick}
            special={special}
            setSpecial={setSpecial}
            general={general}
            setGeneral={setGeneral}
            res={res}
          />
          {orderClick === true ? (
            <Menu general={general} special={special} />
          ) : (
            <Contact res={res} />
          )}
        </div>
      ) : null}

      {loading ? <Loader /> : null}
    </>
  );
};

export default SellerMenu;
