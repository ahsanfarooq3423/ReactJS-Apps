import React from 'react';
import Landing from '../LandingPage/Landing';
import Dashboard from '../Dashboard/Dashboard';

import {Switch, Route} from 'react-router'

const aursapp = () => {
    return (
        <div>
            {/* <Landing/> */}
            {/* <Dashboard/> */}

            <Switch>
                <Route path = '/home'  component = {() => <Landing/> } />
                <Route path = '/dashboard'  component = {() => <Dashboard/> } />
            </Switch>
        </div>
    )
}

export default aursapp;