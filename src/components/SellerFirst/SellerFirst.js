import React,{useEffect} from "react"
import classes from './SellerFirst.module.css'
import logo from '../../assets/images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import Modal from 'react-modal'
import SellerFirstLogic from "./SellerFirstLogic";
const SellerFirst=()=>{
    const {response,ModalOpen,FirstForm,SecondForm,FirstFormHandler,SecondFormHandler,FoodPicHandler,ProfilePicHandler,NavigateNext,OuterForm,InnerForm,DoneHandler,StopNavigation,setResponse} =SellerFirstLogic();
    useEffect(()=>{
        let sellerID=localStorage.getItem('SellerId')
        console.log(sellerID)
        
        axios.get('http://localhost:8080/seller/getSellerConfig', {
            params: {
              sellerID: sellerID
            }
          })
          .then(function (response) {
            setResponse({generalDishesCount:response.data.generalDishesCount,
                message:response.data.message,mobileNo:response.data.mobileNo,sellerName:response.data.sellerName,specialDishesCount:response.data.specialDishesCount});

          })
          .catch(function (error) {
            if(error.response.status===403){
                localStorage.removeItem('SellerId')
                toast.warn('Seller Not Authorized', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    setTimeout(() => {
                        window.location.href="/SellerSignIn"
                      }, 2000); 
               
            }
            if(error.response.status===409){
                toast.warn('Dashboard Already Filled', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    setTimeout(() => {
                        window.location.href="/SellerSignUp"
                      }, 2000); 
                
            }
          })
    })
    return(
        <div className={classes.OuterContainer}>
            <Modal isOpen={ModalOpen}
               className={classes.Modal}
               overlayClassName={classes.OverlayClass}
              >

                <div className={classes.ModalContainer}>
                   <div className={classes.ConfirmContainer}>
                       <p>Are you sure you want to Submit?</p>
                       <p>Note: After submitting you will be redirected to your Dashboard</p>
                   </div>
                   <div className={classes.ConfirmButtonContainer}>
                      
                           <button className={classes.ButtonOne} onClick={NavigateNext} type="button">YES</button>
                     
                           <button className={classes.ButtonTwo} onClick={StopNavigation} type="button">No</button>
                       
                   </div>
                    </div>
            </Modal>
            <div className={classes.NavContainer}>
                <div className={classes.LogoContainer}>
                    <img src={logo} alt="Rasoi logo"/>
                </div>
                
                <div className={classes.WelComeText}>
                    <p><span className={classes.Welcome}> Welcome</span>, {response.sellerName}!</p>
                </div>
            </div>
            <div className={classes.ProfileText}>
                <p>Let's Setup Your Profile First!</p>
            </div>
            
            
                <div className={classes.FormContainer}>
                
                <div className={classes.LeftForm}>
                <form onSubmit={OuterForm} encType='multipart/form-data'>
                    <div className={classes.ProfilePicContainer}>
                        <div className={classes.ProfileContainerText}>
                            <p>PROFILE PICTURE</p>
                        </div>
                        <div className={classes.ProfileInput}>
                        <label htmlFor="ProfileInputId">
              <div className={classes.LabelContainer}>
               <i class="fas fa-upload"></i>
               <p>Upload Image</p>
              </div>
            </label>
            <input
              className={classes.FileInput}
              type="file"
              name="ProfilePic"
              onChange={ProfilePicHandler}
              id="ProfileInputId"
              accept=".png,.jpg,.jpeg"
            />
                        </div>
                    </div>
                    <div className={classes.NameContainer}>
                        <div className={classes.NameText}>
                            <p>Name*</p>
                        </div>
                        <div className={classes.NameInput}>
                            <input type="text" name="Name" value={response.sellerName} readOnly />
                        </div>
                    </div>
                    <div className={classes.MobileContainer}>
                        <div className={classes.MobileText}>
                            <p>Mobile*</p>
                        </div>
                        <div className={classes.MobileInput}>
                            <input type="number" name="Mobile" value={response.mobileNo} readOnly/>
                        </div>
                    </div>
                    <div className={classes.BioContainer}>
                        <div className={classes.BioText}>
                            <p>Bio</p>
                        </div>
                        <div className={classes.BioInput}>
                            <textarea name="bio" value={FirstForm.bio} onChange={FirstFormHandler}/>
                        </div>
                    </div>
                    <div className={classes.SocialContainer}>
                        <div className={classes.SocialText}>
                            <p>SOCIAL MEDIA</p>
                        </div>
                        <div className={classes.FaceBookContainer}>
                        <i class="fab fa-facebook"></i>
                        <input title="https://www.facebook.com/thor98571/   thor98571--->Username" type="text" placeholder="Facebook Username" name="facebook" value={FirstForm.facebook} onChange={FirstFormHandler}/>
                        </div>
                        <div className={classes.InstagramContainer}>
                        <i class="fab fa-instagram"></i>
                        <input title="https://www.instagram.com/dsc_sitrc/   dsc_strc--->Username" type="text" placeholder="Instagram Username" name="instagram" value={FirstForm.instagram} onChange={FirstFormHandler} />
                        </div>
                       
                    </div>
                    <div className={classes.InnerButton}>
                        <input type="submit" value="SAVE DETAILS" />
                    </div>
                    </form>
                </div>
                
                <div className={classes.RightForm}>
                    <div className={classes.FirstContainer}>
                        <div className={classes.FirstContainerText}>
                            <p>ADDRESS DETAILS</p>
                        </div>
                        <div className={classes.FirstContainerInput}>
                            <div className={classes.StreetAddress}>
                            <div className={classes.StreetAddressText}>
                                <p>Street Address*</p>
                            </div>
                            <div className={classes.StreetAddressInput}>
                                <input type="text" name="areaName" value={FirstForm.areaName} onChange={FirstFormHandler} />
                            </div>
                            </div>
                            <div className={classes.PinCodeContainer}>
                                <div className={classes.PinCodeText}>
                                    <p>Pincode*</p>
                                </div>
                                <div className={classes.PinCodeInput}>
                                    <input type="number"  name="pinCode" value={FirstForm.pinCode} onChange={FirstFormHandler}/>
                                    
                                </div>
                                
                            </div>
                           
                        </div>
                   
                    </div>
                   
                    <div className={classes.SecondContainer}>
                        <div className={classes.MenuText}>
                            <p>MENU ITEMS</p>
                        </div>
                        <div className={classes.SecondFormContainer}>
                        <form onSubmit={InnerForm} encType='multipart/form-data'>
                            <div className={classes.Wrapper}>
                            <div className={classes.FirstForm}>
                                <div className={classes.FoodNameContainer}>
                                    <div className={classes.FoodNameText}>
                                        <p>Name of the Food*</p>
                                    </div>
                                    <div className={classes.FoodNameInput}>
                                        <input type="text" name="dishName" value={SecondForm.dishName} onChange={SecondFormHandler} />
                                    </div>
                                </div>
                                <div className={classes.TypeContainer}>
                                    <div className={classes.TypeText}>
                                        <p>Type*</p>
                                    </div>
                                    <div className={classes.TypeInput}>
                                    <select name="dishType" value={SecondForm.dishType} onChange={SecondFormHandler}>
                                        <option value="Veg">Veg</option>
                                        <option value="Non-Veg">Non-Veg</option>
                                    </select>
                                    </div>
                                </div>
                                {
                                    response.specialDishesCount===3?<p className={classes.SpecialMessage}>Max Speciality Count Reached</p>:
                                <div className={classes.CheckContainer}>
                                 <input onChange={SecondFormHandler} name="isSpecial" value={true} type="checkbox"/>
                                    <label>Mark as Speciality</label>
                                    <p>*You can add upto 3 special items</p>
                                    </div>
                                }
                            </div>
                            <div className={classes.SecondForm}>
                                <div className={classes.PriceContainer}>
                                    <div className={classes.PriceText}>
                                        <p>Price*</p>
                                    </div>
                                    <div className={classes.PriceInput}>
                                        <input type="number" name="price" value={SecondForm.price} onChange={SecondFormHandler}/>
                                    </div>
                                </div>
                                <div className={classes.TimeContainer}>
                                    <div className={classes.TimeText}>
                                        <p>Time to Cook (in minutes)*</p>
                                    </div>
                                    <div className={classes.TimeInput}>
                                        <input type="number" min="30" max="240" name="timeReq" value={SecondForm.timeReq} onChange={SecondFormHandler}/>
                                    </div>
                                </div>
                                <div className={classes.FoodImageContainer}>
                                    <div className={classes.FoodImageText}>
                                        <p>Upload your Food Picture*</p>
                                    </div>
                                    <div className={classes.FoodImageInput}>
                                        <input type="file" name="Picture" accept=".png,.jpg,.jpeg" onChange={FoodPicHandler} />
                                    </div>
                                </div>
                            </div>
                            </div>
                            {
                                response.generalDishesCount===10?<p className={classes.SpecialMessage}>Max Menu Items Count Reached</p>:
                            <div className={response.generalDishesCount===10?classes.HideAddButton: classes.FirstButton}>
                                <input type="submit" value="ADD ITEM"/>
                            </div>
                            }
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                <div className={classes.OuterButton}>
                    <button id="SubmitButtonId" type="button" onClick={DoneHandler}>Submit</button>
                </div>
                <ToastContainer />
        </div>
    )
}
export default SellerFirst;