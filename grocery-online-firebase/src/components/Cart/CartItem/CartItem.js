import React from 'react';
import classes from './CartItem.module.css';
import Addon from '../../Grocery/GroceryItems/GroceryItem/Button/Addon';


//particular item component in the show cart page
const cartitem = (props) => {
    let type = props.item.type;
    let name = props.item.itemName;
    let price = props.item.price;
    let unitPrice = props.grocery[type].items[name].price;
    let totalUnits = price / unitPrice;
    
    
    return (
        <div className  = {classes.cartItem}>

            <img src = {require('../../../assets/images/'+ type +'/' + name + '.jpeg')} alt = {name}/>
            <p>{props.item.itemName}</p>

            <div className = {classes.button}>
                <Addon
                removeItem = {() => props.removeItem(name,type)} 
                getItem = {() =>props.getItem(name,type)}
                totalItems = {totalUnits}/>
            </div>

            <p>{totalUnits} x ${unitPrice} =  ${unitPrice * totalUnits}</p>


        </div>
    )
    
}


export default cartitem;
