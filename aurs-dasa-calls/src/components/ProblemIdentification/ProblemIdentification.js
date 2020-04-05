import React from 'react';
import Nav from './ProblemNav/Nav';

import classes from './ProblemIdentification.module.css';
import { Switch, Route } from 'react-router-dom';

// import LiveSpeech from './LiveSpeechText/LiveSpeechText';
// import GeneralInfo from './GeneralInfo/GeneralInfo';
// import CallsHistory from './CallsHistory/CallsHistory';

import ProblemIdentification from './LiveProblem/LiveProblem';


const SpeechText = (props) => {
    return (
        <div className = {classes.main}> 
            <Nav/>  
            <Switch>
                {/* <Route path = '/speech/live' exact component = {() => <LiveSpeech/> } /> 
                 <Route path = '/speech/stats' exact component = {() => <GeneralInfo/> } /> 
               <Route path = '/speech/history' exact component = {() => <CallsHistory/> } /> */}

                {/* <LiveSpeech/> */}
                {/* <GeneralInfo/> */}
                {/* <CallsHistory/> */}

               <ProblemIdentification/>

            </Switch>
        </div>
    )
}

export default SpeechText;