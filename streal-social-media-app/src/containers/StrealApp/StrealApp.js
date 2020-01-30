import React, {Component} from 'react';
import Screens from '../../components/Screens/Screens';
import User from '../../components/User/User';

import classes from './StrealApp.module.css';

class StrealApp extends Component {
    render() {
        return(
            <div>
                <div className = {classes.screenContainer}>
                    <Screens/>
                    <User/>
                </div>
            </div>
        )
    }
}

export default StrealApp;