import React from "react";
import classes from "./DeleteModal.module.css";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";
const DeleteModal = (props) => {
  const DeleteDish = () => {
    axios
      .delete("http://104.43.237.82/seller/deleteDish", {
        params: {
          sellerID: props.config.sellerID,
          dishID: props.config.dishID,
        },
      })
      .then((res) => {
        //   console.log(res);
        if (res.status === 200) {
          toast.success("Dish Deleted Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            props.close();
            props.load(!props.loadvar);
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(Config)
  };
  return (
    <Modal isOpen={true} className={classes.Modal}>
      <div className={classes.OuterContainer}>
        <div className={classes.InnerContainer}>
          <div className={classes.FirstTextContainer}>
            <p>Are you sure, you want to Delete?</p>
          </div>
          <div className={classes.ButtonContainer}>
            <div className={classes.YesButton}>
              <button type="button" onClick={DeleteDish}>
                Yes
              </button>
            </div>
            <div className={classes.NoButton}>
              <button type="button" onClick={props.close}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default DeleteModal;
