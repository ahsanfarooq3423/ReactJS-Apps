import React from 'react';
import classes from './NewButtons.module.css';

const newbuttons = (props) => {
    return(
        <div className = {classes.main}>
            <button 
                onClick = {props.discardPost}
                className = {classes.discard}>Discard </button>
            <button 
                onClick = {props.submitPost}
                className = {classes.submit}>Submit the Post</button>
        </div>
    )
}

export default newbuttons;