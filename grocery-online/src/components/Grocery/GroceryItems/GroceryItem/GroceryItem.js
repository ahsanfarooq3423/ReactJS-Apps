import React from 'react';
import classes from './GroceryItem.module.css';


const item = () => {
    return (
        <div className = {classes.card} >
            <div>
            <img src = "https://images.unsplash.com/photo-1553536645-f83758b55d23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=762&q=80"/>
            </div>

            <h3>Spinach</h3>
            <p> $ 2.50</p>
            <button>ADD TO CART</button>
        </div>
    )
}


export default  item;