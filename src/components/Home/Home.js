import React, { useEffect, useState } from "react";
import Filter from "../Headline/Filter";
import classes from "./Home.module.css";
import SellerCard from "./SellerCard";
import axios from "axios";
import ConsumerHeader from "../ConsumerHeader/ConsumerHeader";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [Sellers, setSellers] = useState([]);
  // const [uimg, setUimg] = useState();
  // let Sellers;
  useEffect(() => {
    let ConsumerId = localStorage.getItem("ConsumerId");
    if (ConsumerId === null) {
      window.location.href = "/";
    } else {
      const consumerID = localStorage.getItem("ConsumerId");
      localStorage.removeItem("sellerID");
      axios
        .get("http://13.89.1.212/consumer/consumerDashbord", {
          params: {
            consumerID: consumerID,
          },
        })
        .then(function (response) {
          setLoading(true);
          // console.log(response);
          setSellers(response.data.sellersData);
          localStorage.setItem("img", response.data.consumerData.consumerImage);
          localStorage.setItem(
            "consumerData",
            JSON.stringify(response.data.consumerData)
          );
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    //eslint-disable-next-line
  }, []);

  // setUimg(localStorage.getItem("img"));
  // console.log(uimg);
  const uimg = localStorage.getItem("img");

  return (
    <>
      <ConsumerHeader Sellers={Sellers} setSellers={setSellers} uimg={uimg} />
      <div className={classes.container}>
        <Filter Sellers={Sellers} setSellers={setSellers} />
        {Sellers.map((seller) => {
          return (
            <SellerCard
              key={seller.sellerID}
              sellerID={seller.sellerID}
              sellerName={seller.name}
              specialDishes={seller.dishes}
              ratings={seller.rating}
              sellerImg={seller.img}
            />
          );
        })}
      </div>
      <Footer />
      {loading && <Loader />}
    </>
  );
};

export default Home;
