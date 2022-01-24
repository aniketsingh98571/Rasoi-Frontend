import React from "react";
import classes from "./SellerCard.module.css";

const SellerCard = (props) => {
  // const [dishes, setDishes] = useState(props.specialDishes);

  return (
    <>
      <div className={classes.card}>
        <div className={classes.sellerImage}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ivCX30t_GkaYNqPQY53bg2ZHZDr-mmv37g&usqp=CAU"
            alt="Seller"
          />
        </div>
        <div className={classes.sellerDesc}>
          <h3>{props.sellerName}</h3>
          {/* <p>{dishes + ", " + ""}</p> */}
          <p>{props.specialDishes.toString().replaceAll(",", ", ")} </p>
        </div>

        <div className={classes.rateandView}>
          <div className={classes.rating}>
            <p>{props.ratings}</p>
            <i className="fas fa-star"></i>
          </div>
          <button className={classes.view}>View</button>
        </div>
      </div>
    </>
  );
};

export default SellerCard;
