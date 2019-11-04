import React, {Component} from 'react';
import classes from './Chart.module.css';
import {Bar, Line, Pie } from 'react-chartjs-2';



class Chart extends Component {

    state = {
        chartData : {
            labels : ['Boston ', 'Worcester', 'SpingField', 'Lowell', 'Cambridge', 'New Bedford'],
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
                    backgroundColor : [
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

    render() {
        return(
            <div className = {classes.chart}>
            <h5>Audio Calls Analytics</h5>

                <Bar
                    data = {this.state.chartData}
                    options = {{
                        maintainAspectRation : false
                    }}

                    />


            <div>

            </div>
        </div>
        )
        
    }
}

export default Chart;