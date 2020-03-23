import React from 'react';
import Nav from './Nav/Nav';
import AudioPicker from './AudioPicker/AudioPicker';
import classes from './Sentiment.module.css';


const sentiment = () => {
    return (
        <div className = {classes.main}>   
            <Nav/>
            <AudioPicker/>

        </div>
    )
}

export default sentiment;