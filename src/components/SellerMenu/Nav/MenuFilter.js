import React, { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import classes from "./MenuFilter.module.css";
import { toast } from "react-toastify";
// import Dropdown from "./Dropdown.js";

const MenuFilter = (props) => {
  const [clickStatus, setclickStatus] = useState(false);
  const handleFilterClick = () => {
    setclickStatus(!clickStatus);
  };

  const filterClick = (vn) => {
    setclickStatus(false);
    if (vn) {
      let fSpecial, fGeneral;
      fSpecial = props.res.specialDishes.specialDishes.filter((item) => {
        return item.type === "Veg";
      });

      fGeneral = props.res.generalDishes.generalDishes.filter((item) => {
        return item.type === "Veg";
      });

      if (fGeneral.length === 0 && fSpecial.length === 0) {
        toast.warn("No items for this filter", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        props.setGeneral(fGeneral);
        props.setSpecial(fSpecial);
      }
    } else if (!vn) {
      let fSpecial, fGeneral;
      fSpecial = props.res.specialDishes.specialDishes.filter((item) => {
        return item.type === "Non-Veg";
      });
      fGeneral = props.res.generalDishes.generalDishes.filter((item) => {
        return item.type === "Non-Veg";
      });
      if (fGeneral.length === 0 && fSpecial.length === 0) {
        toast.warn("No items for this filter", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        props.setGeneral(fGeneral);
        props.setSpecial(fSpecial);
      }
    }
  };

  return (
    <>
      <div className={classes.filterWrapper}>
        <div className={classes.filter} onClick={handleFilterClick}>
          <div className={classes.filterText}>
            <h3>Filter</h3>
          </div>
          <div className={classes.filterIcon}>
            <i className="fas fa-sliders-h"></i>
          </div>
        </div>
      </div>
      {clickStatus && (
        <FilterDropdown
          filterClick={filterClick}
          setclickStatus={setclickStatus}
        />
      )}
    </>
  );
};

export default MenuFilter;
