import React from 'react';
import classes from './EditButtons.module.css';

const editbuttons = (props) => {
    return(
        <div className = {classes.main}>
            <button className = {classes.discard}>Discard </button>
            <button
                onClick = {props.savePost} 
                className = {classes.submit}>Save the Post</button>
        </div>
    )
}

export default editbuttons;