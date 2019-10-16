import React from 'react';
import classes from './GroceryTypes.module.css';


const grocerytypes = (props) => {
    
    return(
        <div className = {classes.Categories}>
            <ul>
                <li className = {classes.title}>All Categories</li>
                {props.types.map(type => {
                    return <li 
                            className ={classes.types}  
                            onClick = {() => props.getPage(type)} > {type.name} </li>
                })}
            </ul>
        </div>
    )
}


export default grocerytypes;