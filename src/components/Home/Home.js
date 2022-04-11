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
    if (localStorage.getItem("ConsumerId") === null) {
      window.location.href = "/";
    } else {
      const consumerID = localStorage.getItem("ConsumerId");
      localStorage.removeItem("sellerID");
      axios
        .get("http://localhost:8080/consumer/consumerDashbord", {
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

  // const Sellers = [
  //   {
  //     sellerID: 101,
  //     sellerName: "Aniket Singh",
  //     specialDishes: ["Pav Bhaji", "Aloo Paratha"],
  //     ratings: 4.1,
  //     sellerImg:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
  //   },
  //   {
  //     sellerID: 102,
  //     sellerName: "Dhanshree Shimpi",
  //     specialDishes: ["Paneer Masala", "Schezwan Noodles", "Manchurian"],
  //     ratings: 4.3,
  //     sellerImg:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
  //   },
  //   {
  //     sellerID: 103,
  //     sellerName: "Pushkar Khadase",
  //     specialDishes: ["Fried Rice", "Sandwich", "Misal"],
  //     ratings: 4.3,
  //     sellerImg:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
  //   },
  //   {
  //     sellerID: 104,
  //     sellerName: "Somesh Lad",
  //     specialDishes: ["Maggi", "Pasta"],
  //     ratings: 5.0,
  //     sellerImg:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
  //   },
  //   {
  //     sellerID: 105,
  //     sellerName: "Ramu Kaka",
  //     specialDishes: ["Dosa", "Uttapa"],
  //     ratings: 4.4,
  //     sellerImg:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
  //   },
  //   {
  //     sellerID: 106,
  //     sellerName: "R. Srinivasan",
  //     specialDishes: ["Momos", "Misal", "Pizza"],
  //     ratings: 4.7,
  //     sellerImg:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
  //   },
  // ];
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
