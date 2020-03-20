import React from 'react';
import classes from './Working.module.css';
import Step from './SubWorkComponents/Step';


const working = () => {
    return(
        <div className = {classes.working_main}>
            <h1> <span className={classes.demo_span}>How it</span> Works </h1>
            <hr/>
            <Step image_first = {true}/>
        </div>
    )
}

export default working;