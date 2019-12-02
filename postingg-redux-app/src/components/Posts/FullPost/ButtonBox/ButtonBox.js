import React from 'react';
import classes from './ButtonBox.module.css';

const buttonbox = () => {
    return(
        <div className = {classes.buttonbox}>
            <button className = {classes.edit}>Edit Post</button>
            <button className = {classes.delete}>Delete Post</button>
        </div>
    )
}


export default buttonbox; 