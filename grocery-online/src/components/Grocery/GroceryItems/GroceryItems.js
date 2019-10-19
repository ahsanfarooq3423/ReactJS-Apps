import React from 'react';
import Item from './GroceryItem/GroceryItem';
import classes from './GroceryItems.module.css';



const GroceryItems = (props) => {
    let currentPage = props.currentPage;
    let data = props.data;
    let items = data[currentPage].items;
    let keys = Object.keys(items);
    
    
    return (        
    <div className = {classes.list}>
        {keys.map((type,index) => {
            return <Item 
                        cart = {props.cart}
                        totalItems = {props.totalItems}
                        name = {type} 
                        key = {index}
                        getItem = {() =>props.getItem(type,currentPage)}
                        removeItem = {() => props.removeItem(type,currentPage)}
                        price = {items[type].price} 
                        type = {currentPage}/>
        })}

        </div>

    

        
    )
}


export default GroceryItems;


