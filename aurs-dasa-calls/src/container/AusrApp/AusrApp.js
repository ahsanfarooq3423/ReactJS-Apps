import React from 'react';
import Landing from '../LandingPage/Landing';
import Dashboard from '../Dashboard/Dashboard';
import Navigation from '../../components/Navbar/Navbar';

import Auth from '../../components/Auth/Auth';

import {Switch, Route} from 'react-router'

const aursapp = () => {
    return (
        <React.Fragment>
            <Navigation/>
            <Switch>
                <Route path = '/home'  component = {() => <Landing/> } />
                <Route path = '/dashboard'  component = {() => <Dashboard/> } />
                <Route path = '/auth'  component = {() => <Auth/> } />
            </Switch>
        </React.Fragment>
    )
}

export default aursapp;