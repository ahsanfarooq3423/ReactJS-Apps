import React from 'react';
import classes from './Note.module.css';

const note = (props) => {
    return(
        <div className = {classes.contain}>
            <h4>Clearing out the Unneccery:</h4>
             <p>{props.text}</p>
        </div>
    )
}

export default note;