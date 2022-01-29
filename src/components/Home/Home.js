import React from "react";
import Filter from "../Headline/Filter";
import classes from "./Home.module.css";
import SellerCard from "./SellerCard";

const Home = () => {
  // useEffect(() => {
  //   localStorage.getItem("consumerID");
  //   axios.get('http://localhost:8080/seller/getSellerConfig', {
  //           params: {
  //             sellerID: sellerID
  //           }
  //         })
  //         .then(function (response) {
  //           setResponse({generalDishesCount:response.data.generalDishesCount,
  //               message:response.data.message,mobileNo:response.data.mobileNo,sellerName:response.data.sellerName,specialDishesCount:response.data.specialDishesCount});
  //         })
  //         .catch(function (error) {
  //           if(error.response.status===403){
  //               localStorage.removeItem('SellerId')
  //               window.location.href="/SellerSignIn"
  //           }
  //           if(error.response.status===409){
  //               window.location.href="/SellerSignUp"
  //           }
  //         })
  //   //eslint-disable-next-line
  // }, [])

  const Sellers = [
    {
      sellerID: 101,
      sellerName: "Aniket Singh",
      specialDishes: ["Pav Bhaji", "Aloo Paratha"],
      ratings: 4.1,
      sellerImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
    },
    {
      sellerID: 102,
      sellerName: "Dhanshree Shimpi",
      specialDishes: ["Paneer Masala", "Schezwan Noodles", "Manchurian"],
      ratings: 4.3,
      sellerImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
    },
    {
      sellerID: 103,
      sellerName: "Pushkar Khadase",
      specialDishes: ["Fried Rice", "Sandwich", "Misal"],
      ratings: 4.3,
      sellerImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
    },
    {
      sellerID: 104,
      sellerName: "Somesh Lad",
      specialDishes: ["Maggi", "Pasta"],
      ratings: 5.0,
      sellerImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
    },
    {
      sellerID: 105,
      sellerName: "Ramu Kaka",
      specialDishes: ["Dosa", "Uttapa"],
      ratings: 4.4,
      sellerImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
    },
    {
      sellerID: 106,
      sellerName: "R. Srinivasan",
      specialDishes: ["Momos", "Misal", "Pizza"],
      ratings: 4.7,
      sellerImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU",
    },
  ];
  return (
    <div className={classes.container}>
      <Filter />
      {Sellers.map((seller) => {
        return (
          <SellerCard
            key={seller.sellerID}
            sellerID={seller.sellerID}
            sellerName={seller.sellerName}
            specialDishes={seller.specialDishes}
            ratings={seller.ratings}
            sellerImg={seller.sellerImg}
          />
        );
      })}
    </div>
  );
};

export default Home;
