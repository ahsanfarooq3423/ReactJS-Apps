import React, {Component} from 'react';
import classes from './Chart.module.css';
import {Bar, Line, Pie } from 'react-chartjs-2';



class Chart extends Component {


    render() {
        let show  = null;
        if (this.props.type === 'Bar') {
            show = (
                <div className = {classes.chart}>
                    <h5>Audio Calls Analytics</h5>
                    <Bar
                            data = {this.props.data}
                            options = {{
                                maintainAspectRation : false }}/>
                </div>
            )         
        }

        return(
            <div>
                {show}
            </div>
            
        )
    }
}

export default Chart;