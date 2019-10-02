import React from 'react';
import styles from './Intro.module.css';


const intro = () => {
    return(
        <div className = {styles.intro}>
            <h1>This a Recipe App</h1>
            <h2>You can record your recipe here</h2>
            <p>All your recipes are stored in your browser's local storage
                and any changes you make will remain saved as long as you 
                continue to access this page from the same browser.
            </p>
        </div>
       
    )
}


export default intro;