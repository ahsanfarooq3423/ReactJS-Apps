import React from 'react';
import classes from './NewTitle.module.css';

const newtitle = () => {
    return(
        <div className = {classes.main}>
            <h3 className = {classes.title}>Enter Title for the Post:</h3>
            <input className = {classes.titleInput} placeholder = 'Title Name'></input>
        </div>
    )
}

export default newtitle;