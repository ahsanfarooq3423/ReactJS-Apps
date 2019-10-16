import React from 'react';
import classes from './Button.module.css';


const button = () => {
    let items = true;

    

    return (

        items ? (<div className = {classes.button} >
            <button className = {classes.small}>+</button>
          
                <p>3</p>
           
            <button className = {classes.small}>-</button>
        </div>) : (<button className ={classes.cart}>
            ADD TO CART
        </button>)
        

        
    )
}

export default button;