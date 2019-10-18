import React from 'react';
import classes from './CartItem.module.css';
import Button from '../../Grocery/GroceryItems/GroceryItem/Button/Button';

const cartitem = () => {
    return (
        <div className  = {classes.cartItem}>

            <img src = {require('../../../assets/images/bread/toast.jpeg')}/>
            <p>cinammon Sticks</p>

            <div className = {classes.button}>
                <Button/>
            </div>

            <p> $ 0.50 </p>


        </div>
    )
    
}

export default cartitem;
