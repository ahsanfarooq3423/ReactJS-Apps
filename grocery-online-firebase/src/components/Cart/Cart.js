import React from 'react';
import Aux from '../../containers/hoc/Aux';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const cart = (props) => {
    let number_items = props.cart.totalItems;
    let totalPrice = props.cart.totalPrice;
    let items = Object.keys(props.cart.items);
    

    
    let totalItems = props.cart.totalItems;

    let show;
    if (totalItems === 0) {
        show = (null);
    }
    else {
        show = (
            items.map(item => {
                return <CartItem
                    
                     removeItem = {props.removeItem}
                     getItem = {props.getItem} 
                     key = {item + toString(Math.random())}
                     item = {props.cart.items[item]}
                     grocery = {props.grocery}
                />
            })
        )
    }
    
    return(
        <Aux>
            <h1 className = {classes.h1}>Shopping Cart</h1>
            <div className = {classes.summary}>
                <div className = {classes.heading}>
                    <p> You have {number_items} items in the shopping cart.</p>
                    <button onClick = {props.clear}>Clear Shopping Cart</button>
                </div>
                

                <div className = {classes.menu}>
                    <div>Product</div>
                    <div>Quantity</div>
                    <div className = {classes.price}>Price</div>
                   
                   
                </div>

                <hr/>
                
               

               {show}
              
               

               <div className = {classes.total}>
                   <p>Total:</p>
                   <p className = {classes.totalprice}> $ {totalPrice.toFixed(2)}</p>
               </div>
               
                <button className = {classes.check} onClick = {props.summary}>Check Out</button>
            </div>
        </Aux>
    )
}

export default cart;