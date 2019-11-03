import React, {Component} from 'react';
import Aux from '../../containers/hoc/Aux/Aux';
import classes from './Dashboard.module.css';


class Dashboard extends Component {
    render(){
        return(
            <Aux>
                <div className  = {classes.title}>
                    <h1>Dashboard</h1>
                </div>
               
            </Aux>
        )
    }
}

export default Dashboard;