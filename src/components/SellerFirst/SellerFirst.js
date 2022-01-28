import React,{useState,useEffect} from "react"
import classes from './SellerFirst.module.css'
import logo from '../../assets/images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const SellerFirst=()=>{
    const [response,setResponse]=useState({
        generalDishesCount:"",
        message:"",
        mobileNo:"",
        sellerName:"",
        specialDishesCount:""
    })
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
                window.location.href="/SellerSignIn"
            }
            if(error.response.status===409){
                window.location.href="/SellerSignUp"
            }
          })
    },[])
    const [FirstForm,SetFirstForm]=useState({
        ProfilePic:"",
        bio:"",
        facebook:"",
        instagram:"",
        areaName:"",
        pinCode:""
    })
    const [SecondForm,SetSecondForm]=useState({
        dishName:"",
        price:"",
        dishType:"Veg",
        isSpecial:false,
        timeReq:"",
        Picture:""
    })
    
    const SecondFormHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        SetSecondForm({...SecondForm,[name]:value})
    }
    const FoodPicHandler=(e)=>{
        SetSecondForm({...SecondForm,Picture:e.target.files[0]})
        
    }
    const FirstFormHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        SetFirstForm({...FirstForm,[name]:value})
    }
    const ProfilePicHandler=(e)=>{
        SetFirstForm({...FirstForm,ProfilePic:e.target.files[0]})
    }
    const InnerForm=(e)=>{
        e.preventDefault();
        console.log("InnerForm")

        if(SecondForm.dishName&&SecondForm.price&&SecondForm.Picture&&SecondForm.timeReq) {
            const InnerFormData=new FormData();
            InnerFormData.append('dishName',SecondForm.dishName)
            InnerFormData.append('price',SecondForm.price)
            InnerFormData.append('dishType',SecondForm.dishType)
            InnerFormData.append('isSpecial',SecondForm.isSpecial)
            InnerFormData.append('timeReq',SecondForm.timeReq)
            InnerFormData.append('picture',SecondForm.Picture)
            InnerFormData.append('sellerID',localStorage.getItem('SellerId'))

            axios.post(   'http://localhost:8080/seller/addDishes', InnerFormData)
             .then(res => {
                console.log(res);
                SetSecondForm({dishName:"",price:"",timeReq:""})
                //Server response for genaralized/specialized dish
                //if 1 and all the other required fields in first form are filled then
                //done activate else done not activate.
                if(res.status===201){
                    toast.success('Dish Added Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
             })
             .catch(err => {
                console.log(err)
             });

        }
    
    
        else{ toast.warn('Please Fill out all fields market with *', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

        }
        
    }
    const OuterForm=(e)=>{
        e.preventDefault();
        console.log("Outer Form")
       
     if(FirstForm.areaName&&FirstForm.pinCode&&FirstForm.ProfilePic){
            const OuterFormData=new FormData();
            OuterFormData.append('Picture',FirstForm.ProfilePic)
             OuterFormData.append('bio',FirstForm.bio)
            OuterFormData.append('facebook',FirstForm.facebook)
            OuterFormData.append('instagram',FirstForm.instagram)
            OuterFormData.append('areaName',FirstForm.areaName)
            OuterFormData.append('pinCode',FirstForm.pinCode)
            OuterFormData.append('sellerID',localStorage.getItem('SellerId'))
           
            axios.put(   'http://localhost:8080/seller/fillSellerDetails', OuterFormData)
             .then(res => {
                console.log(res);
                if(res.status===200){
                    toast.success('Seller Info Added Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
               
                
             })
             .catch(err => {
                console.log(err)
                
             });
            
        }
        else{ toast.warn('Please Fill out all fields marked with *', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
    }
    return(
        <div className={classes.OuterContainer}>
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
                        <input type="submit" value="SUBMIT" />
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
                                <div className={classes.CheckContainer}>
                                    <input onChange={SecondFormHandler} name="isSpecial" value={true} type="checkbox"/>
                                    <label>Mark as Speciality</label>
                                    <p>*You can add upto 3 special items</p>
                                </div>
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
                            <div className={classes.FirstButton}>
                                <input type="submit" value="ADD ITEM"/>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                
                <ToastContainer />
        </div>
    )
}
export default SellerFirst;