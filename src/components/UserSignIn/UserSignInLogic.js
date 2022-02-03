import { useState } from "react";
import { toast}  from 'react-toastify';
const UserSignInLogic=()=>{
    const [Consumerlog,SetConsumerlog]=useState({
        Mobile:"",
        Password:""
    })
    const HandleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        SetConsumerlog({...Consumerlog,[name]:value})
       
    }
    const SubmitHandler=(e)=>{
        e.preventDefault();
        if(Consumerlog.Mobile&&Consumerlog.Password){
             //     fetch('http://localhost:8080/consumer/signup', {
    //     method: 'POST', // or 'PUT'
    //     mode: 'cors',
    //     headers: {
    //        'Content-Type': 'application/json',
    //              },
    //    body: JSON.stringify(ConsumerRegistration),
    //        })
    //  .then(response =>{ response.json() //status 403=user already exists.
    //     if(response.status===403)console.log("User already exists")
    //  })
    //  .then(data => {
         
    //   console.log('Success:', data);
    //   console.log(data.message+"aniket")
      
    //  })
    //   .catch((error) => {
    //   console.error('Error:', error);
      
    //  });
        SetConsumerlog({Mobile:"",Password:""})
        }
        else toast.warn('Please fill out all fields', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

        
        
    }
    return {Consumerlog,HandleInput,SubmitHandler}
}
export default UserSignInLogic;