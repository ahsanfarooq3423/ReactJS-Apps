import React from 'react';
import classes from './Button.module.css';

const addon = (props) => {
    
    return ( <div className = {classes.button} >
        <button className = {classes.small} onClick = {props.getItem}>+</button>
      
            <p>{Math.ceil(props.totalItems)}</p>
       
        <button className = {classes.small} onClick = {props.removeItem}>-</button>
        </div>)
}
   

export default addon;


