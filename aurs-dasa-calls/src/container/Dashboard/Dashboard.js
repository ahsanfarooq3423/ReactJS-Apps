import React from 'react';
import LeftDrawer from '../../components/LeftDrawer/LeftDrawer';

import Sentiment from '../../components/SentimentComponents/Sentiment';
import SpeechText from '../../components/SpeechTextComponents/SpeechText';

import classes from './Dashboard.module.css';

const dashboard = () => {
    return (
        <div className = {classes.main}>
            <LeftDrawer/>
            <div className = {classes.left_container}>
                <h3 className = {classes.title}>Dashboard : Speech To Text</h3>
                {/* <Sentiment/> */}
                <SpeechText/>
            </div>
        </div>
    )
}

export default dashboard;