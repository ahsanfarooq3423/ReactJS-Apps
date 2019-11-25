import React from 'react';
import classes from './Note.module.css';

const note = (props) => {
    
    return(
        <div 
            onClick = {props.getIndex}
            className = {classes.contain}>
        <h4>{props.title}</h4>
             <p>{props.text}</p>
        </div>
    )
}

export default note;