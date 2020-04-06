import React from 'react';
import Nav from './ProblemNav/Nav';

import classes from './ProblemIdentification.module.css';
import { Switch, Route } from 'react-router-dom';



import LiveProblem from './LiveProblem/LiveProblem';
import ProblemsInfo from './ProblemsInfo/ProblemsInfo';
import GeneralStats from './GeneralStats/GeneralStats';

const ProblemIdentification = (props) => {
    return (
        <div className = {classes.main}> 
            <Nav/>  
            <Switch>
                {/* <Route path = '/speech/live' exact component = {() => <LiveSpeech/> } /> 
                 <Route path = '/speech/stats' exact component = {() => <GeneralInfo/> } /> 
               <Route path = '/speech/history' exact component = {() => <CallsHistory/> } /> */}


               {/* <LiveProblem/> */}

               {/* <ProblemsInfo/> */}
               <GeneralStats/>
            </Switch>
        </div>
    )
}

export default ProblemIdentification;