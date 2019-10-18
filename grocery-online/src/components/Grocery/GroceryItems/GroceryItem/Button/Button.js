import React from 'react';
import classes from './Button.module.css';


const button = (props) => {
    let items = false;

    

    return (

        items ? (<div className = {classes.button} >
            <button className = {classes.small}>+</button>
          
                <p>3</p>
           
            <button className = {classes.small}>-</button>
        </div>) : (<button className ={classes.cart} onClick = {props.getItem} >
            ADD TO CART
        </button>)
        

        
    )
}

export default button;