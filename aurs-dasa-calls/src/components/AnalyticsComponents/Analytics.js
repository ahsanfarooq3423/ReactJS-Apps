import React from 'react';
import classes from './Analytics.module.css';
import {Switch, Route} from 'react-router';

import Nav from './Nav/Nav';

import FreqCount from './FreqCount/FreqCount';
import NgramCount from './NgramCount/NgramCount';

const Analytics = () => {
    return (
        <div>
            <Nav/>
            <Switch>
                <Route path = '/dashboard/analytics/freq' exact component = {() => <FreqCount/> } />
                <Route path = '/dashboard/analytics/ngram' exact component = {() => <NgramCount/> } />
            </Switch>
        </div>
    )
}

export default Analytics;