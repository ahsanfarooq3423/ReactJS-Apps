import React, {Component} from 'react';
import Chart from './Chart/Chart';
import classes from './Dashboard.module.css';


class Dashboard extends Component {

    state = {
        chartData : {
            labels : ['گاڑی ', 'Worcester', 'SpingField', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets : [
                {
                    label :  'Population',
                    data : [
                        617594,
                        181045,
                        153063,
                        106519,
                        96072
                    ],
                    backgroundColor : 
                    [
                        'rgba(255,99,132,0.6)',
                        'rgba(54,153,120,0.6)',
                        'rgba(65,21,190,0.6)',
                        'rgba(153,76,34,0.6)',
                        'rgba(255,54,212,0.6)',
                        'rgba(255,23,132,0.6)'
                    ]
                }
               

            ]
        }
    }


    render(){

        return(
            <div className = {classes.main}>
                <div className  = {classes.title}>
                    <h3>Dashboard</h3>
                </div>
                <Chart type = 'Bar' data = {this.state.chartData} />
                
            </div>
        )
    }
}

export default Dashboard;