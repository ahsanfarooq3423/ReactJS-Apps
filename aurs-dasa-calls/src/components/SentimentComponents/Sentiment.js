import React from 'react';
import Nav from './SentimentNav/SentimentNav';

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
                <Route path = '/dashboard/sentiment/live' exact component = {() => <LiveSentiment/> } />
                <Route path = '/dashboard/sentiment/stats' exact component = {() => <GeneralStats/> } />
                <Route path = '/dashboard/sentiment/history' exact component = {() => <SenitmentHistory/> } />
            </Switch>
        </div>
    )
}

export default sentiment;