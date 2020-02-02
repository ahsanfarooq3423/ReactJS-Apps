import React, { Component } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Screens from '../../components/Screens/Screens';
import User from '../../components/User/User';
import LoginAuth from '../../components/Auth/LoginAuth/LoginAuth';

import classes from './StrealApp.module.css';

class StrealApp extends Component {

    render() {
        return (
            <div className={classes.screenContainer}>
                <NavBar/>
                <LoginAuth/>
                {/* 
                <User />
                <Screens /> */}
            </div>
        )
    }
}

export default StrealApp;