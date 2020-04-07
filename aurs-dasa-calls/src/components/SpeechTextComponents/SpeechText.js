import React from 'react';
import Nav from './SpeechTextNav/Nav';

import classes from './SpeechText.module.css';
import { Switch, Route } from 'react-router-dom';

import LiveSpeech from './LiveSpeechText/LiveSpeechText';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import CallsHistory from './CallsHistory/CallsHistory';




const SpeechText = (props) => {
    return (
        <div className = {classes.main}> 
            <Nav/>  

            <Switch>
                <Route path = '/dashboard/speech/live' exact component = {() => <LiveSpeech/> } />
                <Route path = '/dashboard/speech/stats' exact component = {() => <GeneralInfo/> } />
                <Route path = '/dashboard/speech/history' exact component = {() => <CallsHistory/> } />
            </Switch>
        </div>
    )
}

export default SpeechText;