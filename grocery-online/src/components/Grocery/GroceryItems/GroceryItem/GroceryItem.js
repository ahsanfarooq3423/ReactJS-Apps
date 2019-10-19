import React from 'react';
import classes from './GroceryItem.module.css';
import Button from './Button/Button';
import Addon from './Button/Addon';


const item = (props) => {
    let name = props.name;
    let caps_name = name[0].toUpperCase() + name.slice(1);
    let type = props.type;
    let unitPrice = props.price;
    //console.log('Unit Price is',unitPrice);
    let cartItemName = props.cart.items[name];
    let totalPrice;
    try{
        totalPrice = cartItemName.price;
    }
    catch{
        totalPrice = unitPrice;
    }

    let totalUnits;
    
    
   
    
    //require('../../../../assets/images/' + type + '/' + name + '.jpeg';

    //checking whether we have any item in the cart or not for a partucular type ..
    
    if (props.cart.items[name] === undefined){
        
        totalUnits = 0
    }

    else {
        totalUnits = totalPrice / unitPrice;
        //console.log(name,totalUnits)
    }

    
    //console.log('Final Total Units are: ', totalUnits);
   

    return (
        

       <div className = {classes.card} >
           
               <img src = {require('../../../../assets/images/' + type + '/' + name + '.jpeg')} alt = {name}/>
               <div className = {classes.info} >
                    <p className = {classes.name}>{caps_name}</p>
                    <p className = {classes.price}>{"$ " + props.price}</p>
                    
               </div>
               {totalUnits === 0 ? <Button
                
                getItem = {props.getItem} 
                totalItems = {props.totalItems}/> : 
                 <Addon
                 removeItem = {props.removeItem} 
                 getItem = {props.getItem} 
                 totalItems = {totalUnits}/>
                }
               
               
           
       </div>
    )
}


export default  item;