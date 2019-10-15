import React from 'react';
import classes from './GroceryTypes.module.css';


const grocerytypes = (props) => {
    return(
        <div className = {classes.Categories}>
            <ul>
                <li>All Categories</li>
                {props.types.map(type => {
                    return <li> {type} </li>
                })}
            </ul>
        </div>
    )
}


export default grocerytypes;