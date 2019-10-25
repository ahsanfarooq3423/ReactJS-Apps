import React from 'react';
import classes from './Confirmation.module.css';

const confirmation = () => (
    <div className = {classes.main}>
        <h1>Thank you!</h1>

        <p className = {classes.text}>We recieved your order and will process it with the next 24 hours!</p>
    </div>
)


export default confirmation;


