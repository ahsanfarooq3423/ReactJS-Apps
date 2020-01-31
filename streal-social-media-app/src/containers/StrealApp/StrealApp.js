import React, { Component } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Screens from '../../components/Screens/Screens';
import User from '../../components/User/User';

import Modal from '../../components/UI/Modal/Modal';

import classes from './StrealApp.module.css';

class StrealApp extends Component {

    render() {
        return (
            <div className={classes.screenContainer}>
                <NavBar />
                <User />
                <Screens />
            </div>
        )
    }
}

export default StrealApp;