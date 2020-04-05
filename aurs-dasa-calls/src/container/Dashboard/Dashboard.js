import React from 'react';
import LeftDrawer from '../../components/LeftDrawer/LeftDrawer';

import { Switch, Route } from 'react-router-dom';


import Sentiment from '../../components/SentimentComponents/Sentiment';
import SpeechText from '../../components/SpeechTextComponents/SpeechText';
import ProblemIdentification from '../../components/ProblemIdentification/ProblemIdentification';


import classes from './Dashboard.module.css';

const dashboard = () => {
    return (
        <div className={classes.main}>
            <LeftDrawer />
            <div className={classes.left_container}>
                <h3 className={classes.title}>Dashboard : Speech To Text</h3>
                {/* <Sentiment/> */}
                {/* <SpeechText /> */}
                <ProblemIdentification/>
            </div>
        </div>
    )
}

export default dashboard;