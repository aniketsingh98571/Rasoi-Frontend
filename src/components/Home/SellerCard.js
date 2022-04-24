import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SellerCard.module.css";

const SellerCard = (props) => {
  // const [dishes, setDishes] = useState(props.specialDishes);
  let navigate = useNavigate();

  const handleViewClick = () => {
    // alert(`Clicked on the seller with id ${props.sellerID}`);
    localStorage.setItem("sellerID", props.sellerID);
    localStorage.setItem("sellerName", props.sellerName);
    navigate(`/sellerMenu`);
    // navigate(`/cart`);
  };
  return (
    <>
      <div className={classes.card}>
        <div className={classes.sellerImage}>
          <img src={`http://104.43.237.82/${props.sellerImg}`} alt="Seller" />
        </div>
        <div className={classes.sellerDesc}>
          <h3>{props.sellerName}</h3>
          {/* <p>{dishes + ", " + ""}</p> */}
          <p>{props.specialDishes.toString().replaceAll(",", ",  ")} </p>
        </div>

        <div className={classes.rateandView}>
          <div className={classes.rating}>
            <p>{props.ratings}</p>
            <i className="fas fa-star"></i>
          </div>
          <button className={classes.view} onClick={handleViewClick}>
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default SellerCard;
