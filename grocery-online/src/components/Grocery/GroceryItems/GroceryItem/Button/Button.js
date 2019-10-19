import React from 'react';
import classes from './Button.module.css';


const button = (props) => {
    
    

    return (

     <button className ={classes.cart} onClick = {props.getItem} >
            ADD TO CART
     </button>
        

        
    )
}

export default button;