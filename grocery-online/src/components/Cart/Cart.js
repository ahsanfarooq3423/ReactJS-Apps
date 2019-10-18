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
                    <div>Product</div>
                    <div>Quantity</div>
                    <div className = {classes.price}>Price</div>
                   
                   
                </div>

                <hr/>
               
               <CartItem/>
               <CartItem/>
               <CartItem/>

               <div className = {classes.total}>
                   <p>Total:</p>
                   <p className = {classes.totalprice}> $ 15.25</p>
               </div>
               
                <button className = {classes.check}>Check Out</button>
            </div>
        </Aux>
    )
}

export default cart;