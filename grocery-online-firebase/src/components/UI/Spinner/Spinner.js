import React from 'react';
import classes from './Spinner.module.css';


const spinner = () => (
    <div className = {classes.spinner}>
         <div className = {classes.loader} >Loading...</div>
         <h3>Please Wait</h3>
    </div>
   
);


export default spinner;