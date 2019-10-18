import React from 'react';
import classes from './CartItem.module.css';
import Button from '../../Grocery/GroceryItems/GroceryItem/Button/Button';

const cartitem = (props) => {
    let type = props.item.type;
    let name = props.item.itemName;
    let price = props.item.price;
    let unitPrice = props.grocery[type].items[name].price;
    let totalUnits = price / unitPrice;
    
    console.log(unitPrice);
    console.log(totalUnits);

    
    return (
        <div className  = {classes.cartItem}>

            <img src = {require('../../../assets/images/bread/toast.jpeg')}/>
            <p>{props.item.itemName}</p>

            <div className = {classes.button}>
                <Button/>
            </div>

            <p> $ 0.50 </p>


        </div>
    )
    
}

export default cartitem;
