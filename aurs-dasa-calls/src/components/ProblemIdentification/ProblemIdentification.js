import React from 'react';
import Nav from './ProblemNav/Nav';

import classes from './ProblemIdentification.module.css';
import { Switch, Route } from 'react-router-dom';

import LiveProblem from './LiveProblem/LiveProblem';
import GeneralStats from './GeneralStats/GeneralStats';
import ProblemsInfo from './ProblemsInfo/ProblemsInfo';
import ProblemHistory from './ProblemHistory/ProblemHistory';

const ProblemIdentification = (props) => {
    return (
        <div className = {classes.main}> 
            <Nav/>  
            <Switch>
                <Route path = '/problem/live' exact component = {() => <LiveProblem/> } /> 
                 <Route path = '/problem/info' exact component = {() => <GeneralStats/> } /> 
                 <Route path = '/problem/stats' exact component = {() => <ProblemsInfo/> } /> 
               <Route path = '/problem/history' exact component = {() => <ProblemHistory/> } />
            </Switch>
        </div>
    )
}

export default ProblemIdentification;