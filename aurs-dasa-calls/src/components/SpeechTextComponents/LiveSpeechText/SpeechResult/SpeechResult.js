import React from 'react';
import classes from './SpeechResult.module.css';

const SpeechResult = (props) => {
    return (
        <div className = {classes.main}>
            <p>{props.result}</p>
        </div>
    )
}

export default SpeechResult;