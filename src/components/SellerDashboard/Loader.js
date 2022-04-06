import React from "react"
import classes from './Loader.module.css'
const Loader=()=>{
    return(
        <div className={classes.MainDiv}>
            <div className={classes.CenterDiv}>
                <span className={classes.loader}></span>
            </div>
        </div>
    )
}
export default Loader;