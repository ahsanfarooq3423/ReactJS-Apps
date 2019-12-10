import React from 'react';
import classes from './EditContent.module.css';

const editcontent = (props) => {
    return(
        <div className = {classes.main}>
              <h3 className = {classes.title}>Edit Content for the Post:</h3>
              <textarea 
                className = {classes.textareaInput} defaultValue = {props.content}/>
        </div>
    )
}

export default editcontent;