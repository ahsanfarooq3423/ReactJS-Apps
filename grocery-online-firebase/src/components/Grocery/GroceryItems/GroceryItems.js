import React from 'react';
import Item from './GroceryItem/GroceryItem';
import classes from './GroceryItems.module.css';
import {Switch, Route} from 'react-router-dom';

//displaying the grocery item in a grid fashion
const GroceryItems = (props) => {
    let currentPage = props.currentPage;
    let data = props.data;
    let items = data[currentPage].items;
    let keys = Object.keys(items);
    
    let show = keys.map((type,index) => {
        return <Item 
                    cart = {props.cart}
                    totalItems = {props.totalItems}
                    name = {type} 
                    key = {index}
                    getItem = {() =>props.getItem(type,currentPage)}
                    removeItem = {() => props.removeItem(type,currentPage)}
                    price = {items[type].price} 
                    type = {currentPage}/>
    })
    
    return (        
    <div className = {classes.list}>
            <Switch>
           <Route path = '/home/:id'  component = {() => show}/>
           </Switch>
        </div>

    

        
    )
}


export default GroceryItems;


