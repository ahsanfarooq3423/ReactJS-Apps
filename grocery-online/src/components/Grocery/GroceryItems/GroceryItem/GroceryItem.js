import React from 'react';
import classes from './GroceryItem.module.css';
import Button from './Button/Button';


const item = (props) => {
    let name = props.name;
    let caps_name = name[0].toUpperCase() + name.slice(1);
    let type = props.type;
    //require('../../../../assets/images/' + type + '/' + name + '.jpeg'
    
    return (
       <div className = {classes.card} >
           
               <img src = {require('../../../../assets/images/' + type + '/' + name + '.jpeg')} alt = {name}/>
               <div className = {classes.info} >
                    <p className = {classes.name}>{caps_name}</p>
                    <p className = {classes.price}>{props.price}</p>
                    
               </div>
               <Button getItem = {props.getItem} />
               
           
       </div>
    )
}


export default  item;