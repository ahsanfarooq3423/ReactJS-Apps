import React from 'react';
import classes from './ButtonBox.module.css';

const buttonbox = (props) => {
    return(
        <div className = {classes.buttonbox}>
            <button 
                onClick = {() => {
                    let to = "editpost"
                    props.history.push(to)
                }}
                className = {classes.edit}>Edit Post</button>
            <button 
                onClick = {props.delete}
                className = {classes.delete}>Delete Post</button>
        </div>
    )
}


export default buttonbox; 