import React from 'react';
import Nav from './Nav/Nav';

import classes from './Sentiment.module.css';
import LiveSentiment from './LiveSenitment/LiveSentiment';


const sentiment = () => {
    return (
        <div className = {classes.main}>   
            <Nav/>
            {/* <LiveSentiment/> */}
        </div>
    )
}

export default sentiment;