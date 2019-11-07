import React from 'react';
import classes from './Confirmation.module.css';


const confirmation = (props) => {
    return(
        <div className = {classes.confirmation}>
        <h5>Are you sure you want to delete this board ...</h5>
        <div className = {classes.button}> 
            <button  
                onClick = {props.deleteboard}
                className = {classes.danger} >Yes</button>
            <button onClick = {props.cancel} className = {classes.cool}>No</button>
        </div>
    </div>
    )
   
}


export default confirmation;