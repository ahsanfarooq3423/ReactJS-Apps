import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import LeftNavigation from '../../components/LeftNavigation/LeftNavigation';
import Dashboard from '../../components/Dashboard/Dashboard';
import classes from './AnalyticsApp.module.css';
import Aux from '../hoc/Aux/Aux';



class AnalyticsApp extends Component {


    render() {

        let main = (
            <div className = {classes.main}>
                <LeftNavigation/>
                <Dashboard/>
            </div>
        )

        return(
            <Aux>
                <Toolbar/>
                {main}
            </Aux>
        )
    }
}

export default  AnalyticsApp;