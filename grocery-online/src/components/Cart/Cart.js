import React from 'react';
import Aux from '../../containers/hoc/Aux';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const cart = () => {
    return(
        <Aux>
            <h1 className = {classes.h1}>Shopping Cart</h1>
            <div className = {classes.summary}>
                <div className = {classes.heading}>
                    <p> You have 3 items in the shopping cart.</p>
                    <button>Clear Shopping Cart</button>
                </div>
                

                <div className = {classes.menu}>
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Price</p>
                </div>
               
               <CartItem/>
               <CartItem/>
               <CartItem/>
               

            </div>
        </Aux>
    )
}

export default cart;