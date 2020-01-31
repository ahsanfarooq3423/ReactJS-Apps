import React, {Component} from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Screens from '../../components/Screens/Screens';
import User from '../../components/User/User';


import classes from './StrealApp.module.css';

class StrealApp extends Component {
    render() {
        return(
            <div>
                <div className = {classes.screenContainer}>
                    <NavBar/>
                    <User/>
                    <Screens/>
                </div>
            </div>
        )
    }
}

export default StrealApp;