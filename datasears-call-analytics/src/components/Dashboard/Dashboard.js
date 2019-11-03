import React, {Component} from 'react';
import Chart from './Chart/Chart';
import classes from './Dashboard.module.css';


class Dashboard extends Component {
    render(){
        return(
            <div className = {classes.main}>
                <div className  = {classes.title}>
                    <h3>Dashboard</h3>
                </div>

                <Chart/>
                

            </div>
        )
    }
}

export default Dashboard;