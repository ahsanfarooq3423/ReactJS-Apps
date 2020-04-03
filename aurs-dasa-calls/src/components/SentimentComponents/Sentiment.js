import React from 'react';
import Nav from './Nav/Nav';

import classes from './Sentiment.module.css';
import { Switch, Route } from 'react-router-dom';


import LiveSentiment from './LiveSenitment/LiveSentiment';
import GeneralStats from './GeneralStats/GeneralStats';
import SenitmentHistory from './SentimentHistory/SentimentHistory';


const sentiment = (props) => {
    return (
        <div className = {classes.main}> 
            <Nav/>  

            <Switch>
                <Route path = '/sentiment/live' exact component = {() => <LiveSentiment/> } />
                <Route path = '/sentiment/stats' exact component = {() => <GeneralStats/> } />
                <Route path = '/sentiment/history' exact component = {() => <SenitmentHistory/> } />
            </Switch>

            
            {/* <LiveSentiment/> */}
            {/* <GeneralStats/> */}
            {/* <SenitmentHistory/> */}
        </div>
    )
}

export default sentiment;