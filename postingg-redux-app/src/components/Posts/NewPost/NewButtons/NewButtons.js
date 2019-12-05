import React from 'react';
import classes from './NewButtons.module.css';

const newbuttons = () => {
    return(
        <div className = {classes.main}>
            <button className = {classes.discard}>Discard </button>
            <button className = {classes.submit}>Submit the Post</button>
        </div>
    )
}

export default newbuttons;