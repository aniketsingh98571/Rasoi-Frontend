// import React, { useState } from "react";
import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";
import Cart from "../../Cart/Cart";
const Menu = () => {
  const specialDishes = [
    {
      id: 101,
      name: "Special1",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 102,
      name: "Special2",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 103,
      name: "Special3",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
  ];

  const normalDishes = [
    {
      id: 1,
      name: "Dish1",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 2,
      name: "Dish2",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 3,
      name: "Dish3",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 4,
      name: "Dish4",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 5,
      name: "Dish5",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 6,
      name: "Dish6",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 7,
      name: "Dish7",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 8,
      name: "Dish8",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 9,
      name: "Dish9",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 10,
      name: "Dish10",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
    {
      id: 11,
      name: "Dish11",
      type: "Veg",
      price: 150,
      timeRequired: "40min",
      imageUrl:
        "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
    },
  ];

  // const [item, setItem] = useState({
  //   dishName: "",
  //   dishQty: 1,
  //   dishType: "",
  //   dishPrice: "",
  // });

  // const initialState = [];
  // let [cart, setCart] = useState(initialState);

  // const handleAddClick = (name, dishQty, dishPrice, dishType) => {
  //   setItem(
  //     (item.dishName = name),
  //     (item.dishQty = dishQty),
  //     (item.dishType = dishType),
  //     (item.dishPrice = dishPrice)
  //   );
  //   console.log(item);

  //   let newCart = cart.concat(item);
  //   setCart(newCart);
  //   console.log(cart);

  //   setItem({
  //     dishName: "",
  //     dishQty: 1,
  //     dishType: "",
  //     dishPrice: "",
  //   });

  //   // setCart(newCart);
  //   // console.log(cart);
  // };

  return (
    <>
      <div className={classes.menuCard}>
        <div className={classes.heading}>
          <p>Speciality</p>
        </div>
        {specialDishes.map((mitem) => {
          return (
            <MenuItem
              key={mitem.id}
              id={mitem.id}
              dishImg={mitem.imageUrl}
              name={mitem.name}
              dishType={mitem.type}
              dishPrice={mitem.price}
              dishTime={mitem.timeRequired}
              dishQty={mitem.dishQty}
              // handleAddClick={handleAddClick}
            />
          );
        })}
      </div>

      <div className={classes.menuCard}>
        <div className={classes.heading}>
          <p>Other Dishes</p>
        </div>
        {normalDishes.map((mitem) => {
          return (
            <MenuItem
              key={mitem.id}
              id={mitem.id}
              dishImg={mitem.imageUrl}
              name={mitem.name}
              dishType={mitem.type}
              dishPrice={mitem.price}
              dishTime={mitem.timeRequired}
            />
          );
        })}
      </div>
      <Cart />
    </>
  );
};

export default Menu;
