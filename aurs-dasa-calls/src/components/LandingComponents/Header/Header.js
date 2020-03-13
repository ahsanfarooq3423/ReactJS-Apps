import React from 'react';
import classes from './Header.module.css';

const header = () => {
    return (
        <div className= {classes.main}>
            <div className = {classes.content}>
                <h1 className = {classes.title}>AUSR - DASA </h1>
                <h2 className = {classes.subtitle}>Automatic Urdu Speech Recognition -
                 Data Analytics and Sentiment Analysis</h2>
                
                 <button>See Demo</button>
                 <button>Go to DashBoard</button>

            </div>
        </div>
    )
}

export default header;