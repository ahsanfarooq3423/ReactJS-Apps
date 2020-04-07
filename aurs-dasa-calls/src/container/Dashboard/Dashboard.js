import React from 'react';
import LeftDrawer from '../../components/LeftDrawer/LeftDrawer';

import { Switch, Route } from 'react-router-dom';


import Sentiment from '../../components/SentimentComponents/Sentiment';
import SpeechText from '../../components/SpeechTextComponents/SpeechText';
import ProblemIdentification from '../../components/ProblemIdentification/ProblemIdentification';
import Analytics from '../../components/AnalyticsComponents/Analytics';



import classes from './Dashboard.module.css';

const dashboard = () => {
    return (
        <div className={classes.main}>
            <LeftDrawer />
            <div className={classes.left_container}>
                <h3 className={classes.title}>Dashboard </h3>
                <Switch>
                <Route path = '/dashboard/speech/'  component = {() => <SpeechText/> } />
                <Route path = '/dashboard/sentiment/'  component = {() => <Sentiment/> } />
                <Route path = '/dashboard/problem/'  component = {() => <ProblemIdentification/> } />
                <Route path = '/dashboard/analytics/'  component = {() => <Analytics/> } />

            </Switch>
            </div>
        </div>
    )
}

export default dashboard;