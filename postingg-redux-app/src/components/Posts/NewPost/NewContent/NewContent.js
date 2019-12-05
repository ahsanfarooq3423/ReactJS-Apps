import React from 'react';
import classes from './NewContent.module.css';

const newcontent = () => {
    return(
        <div className = {classes.main}>
              <h3 className = {classes.title}>Enter Content for the Post:</h3>
              <textarea className = {classes.textareaInput} placeholder = 'Content...'/>
        </div>
    )
}

export default newcontent;