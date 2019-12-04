import React from 'react';
import classes from './ContentBox.module.css';

const contentbox = (props) => {
    return(
        <div className = {classes.content}>
            <p className = {classes.text}>
            {props.content}
            </p>

           

            
        </div>
    )
}

export default contentbox