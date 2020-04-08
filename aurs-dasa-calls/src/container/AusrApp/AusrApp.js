import React from 'react';
import Landing from '../LandingPage/Landing';
import Dashboard from '../Dashboard/Dashboard';
import Navigation from '../../components/Navbar/Navbar';

import {Switch, Route} from 'react-router'

const aursapp = () => {
    return (
        <div>
            <Navigation/>
            <Switch>
                <Route path = '/home'  component = {() => <Landing/> } />
                <Route path = '/dashboard'  component = {() => <Dashboard/> } />
            </Switch>
        </div>
    )
}

export default aursapp;