import React from 'react';
import classes from './EditTitle.module.css';

const edittitle = (props) => {
    return(
        <div className = {classes.main}>
            <h3 className = {classes.title}>Edit Title for the Post:</h3>
            <input 
                className = {classes.titleInput} defaultValue = {props.title}></input>
        </div>
    )
}

export default edittitle;