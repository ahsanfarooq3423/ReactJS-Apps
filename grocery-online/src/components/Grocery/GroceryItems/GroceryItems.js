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
        {keys.map(type => {
            return <Item name = {type} 
                        getItem = {() =>props.getItem(type,currentPage)}
                        price = {"$ " + items[type].price} 
                        type = {currentPage}/>
        })}
            
            
           
        </div>

    

        
    )
}


export default GroceryItems;


