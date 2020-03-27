import React from 'react';
import Nav from './Nav/Nav';

import classes from './Sentiment.module.css';

import LiveSentiment from './LiveSenitment/LiveSentiment';
import GeneralStats from './GeneralStats/GeneralStats';


const sentiment = () => {
    return (
        <div className = {classes.main}>   
            <Nav/>
            <LiveSentiment/>
            {/* <GeneralStats/> */}
        </div>
    )
}

export default sentiment;