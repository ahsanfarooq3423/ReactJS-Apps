import React from 'react';
import classes from './Working.module.css';
import Step from './SubWorkComponents/Step';
import workingData from './WorkingData';

import step1image from '../../../images/workings/step1.png';
import step2image from '../../../images/workings/step2.png';
import step3image from '../../../images/workings/step3.png';
import step4image from '../../../images/workings/step4.png';



const working = () => {
    return (
        <div className={classes.working_main}>
            <h1> <span className={classes.demo_span}>How it</span> Works </h1>
            <hr />
            <Step image_first={true}
                head={workingData.step1Head}
                content={workingData.step1Content}
                image = {step1image} />
            <Step image_first={false}
                head={workingData.step2Head}
                content={workingData.step2Content}
                image = {step2image} />
            <Step image_first={true}
                head={workingData.step3Head}
                content={workingData.step3Content}
                image = {step3image} />
            <Step image_first={false}
                head={workingData.step4Head}
                content={workingData.step4Content}
                image = {step4image} />
        </div>
    )
}

export default working;