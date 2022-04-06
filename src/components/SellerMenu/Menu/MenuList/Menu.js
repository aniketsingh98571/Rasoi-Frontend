// import React, { useState } from "react";
import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";
import Cart from "../../Cart/Cart";
const Menu = (props) => {
  // const specialDishes = [
  //   {
  //     id: 101,
  //     name: "Special1",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 102,
  //     name: "Special2",
  //     type: "Veg",
  //     price: 250,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 103,
  //     name: "Special3",
  //     type: "NonVeg",
  //     price: 190,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  // ];

  // const normalDishes = [
  //   {
  //     id: 1,
  //     name: "Dish1",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Dish2",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Dish3",
  //     type: "NonVeg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Dish4",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Dish5",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 6,
  //     name: "Dish6",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "Dish7",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 8,
  //     name: "Dish8",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 9,
  //     name: "Dish9",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 10,
  //     name: "Dish10",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  //   {
  //     id: 11,
  //     name: "Dish11",
  //     type: "Veg",
  //     price: 150,
  //     timeRequired: "40min",
  //     imageUrl:
  //       "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/C036/production/_113660294_053127032.jpg",
  //   },
  // ];

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

  // console.log(props.res.specialDishes.specialDishes);
  return (
    <>
      <div className={classes.menuCard}>
        <div className={classes.heading}>
          <p>Speciality</p>
        </div>
        {props.res.specialDishes.specialDishes.map((mitem) => {
          return (
            <MenuItem
              key={mitem._id}
              id={mitem._id}
              dishImg={mitem.imageURL}
              name={mitem.name}
              dishType={mitem.type}
              dishPrice={mitem.price}
              dishTime={mitem.timeReq}
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
        {props.res.generalDishes.generalDishes.map((mitem) => {
          return (
            <MenuItem
              key={mitem._id}
              id={mitem._id}
              dishImg={mitem.imageURL}
              name={mitem.name}
              dishType={mitem.type}
              dishPrice={mitem.price}
              dishTime={mitem.timeReq}
            />
          );
        })}
      </div>
      <Cart />
    </>
  );
};

export default Menu;
