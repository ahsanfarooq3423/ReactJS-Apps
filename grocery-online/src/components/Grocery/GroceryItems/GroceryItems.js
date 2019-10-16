import React from 'react';
import Item from './GroceryItem/GroceryItem';
import classes from './GroceryItems.module.css';


const GroceryItems = () => {
    return (
        <div className = {classes.list}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
           
        </div>
    )
}


export default GroceryItems;


