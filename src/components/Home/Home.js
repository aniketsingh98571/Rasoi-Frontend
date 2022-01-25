import React from "react";
import Filter from "../Headline/Filter";
import classes from "./Home.module.css";
import SellerCard from "./SellerCard";

const Home = () => {
  const Sellers = [
    {
      sellerName: "Aniket Singh",
      specialDishes: ["Pav Bhaji", "Aloo Paratha"],
      ratings: 4.1,
    },
    {
      sellerName: "Dhanshree Shimpi",
      specialDishes: ["Paneer Masala", "Schezwan Noodles", "Manchurian"],
      ratings: 4.3,
    },
    {
      sellerName: "Pushkar Khadase",
      specialDishes: ["Fried Rice", "Sandwich", "Misal"],
      ratings: 4.3,
    },
    {
      sellerName: "Somesh Lad",
      specialDishes: ["Maggi", "Pasta"],
      ratings: 5.0,
    },
    {
      sellerName: "Ramu Kaka",
      specialDishes: ["Dosa", "Uttapa"],
      ratings: 4.4,
    },
    {
      sellerName: "R. Srinivasan",
      specialDishes: ["Momos", "Misal", "Pizza"],
      ratings: 4.7,
    },
  ];
  return (
    <div className={classes.container}>
      <Filter />
      {Sellers.map((seller) => {
        return (
          <SellerCard
            key={seller.sellerName}
            sellerName={seller.sellerName}
            specialDishes={seller.specialDishes}
            ratings={seller.ratings}
          />
        );
      })}
    </div>
  );
};

export default Home;
