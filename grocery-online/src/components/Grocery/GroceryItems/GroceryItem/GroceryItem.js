import React from 'react';
import classes from './GroceryItem.module.css';
import Button from './Button/Button';


const item = () => {
    return (
       <div className = {classes.card}>
           
               <img src = 'https://images.unsplash.com/photo-1571192320124-29be3deca0e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'/>
               <div className = {classes.info}>
                    <p className = {classes.name}>Spinach</p>
                    <p className = {classes.price}>$ 2.50</p>
                    
               </div>
               <Button/>
               
           
       </div>
    )
}


export default  item;