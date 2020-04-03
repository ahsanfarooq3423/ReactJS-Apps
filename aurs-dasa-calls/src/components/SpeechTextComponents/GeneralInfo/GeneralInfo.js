import React from 'react';

import Statbox from '../../GeneralComponents/Statbox/Statbox';
import LineChart from './LineChart/LineChart';

import { connect } from 'react-redux';
import classes from './GeneralInfo.module.css';

import phoneImage from '../../../images/statsbox/phone.png';
import accuracyImage from '../../../images/statsbox/accuracy.png';



const GeneralInfo = (props) => {
    const data = {
        totalCalls : {
            title : 'Total Calls',
            subtitle : props.speechState.totalCalls,
            image : phoneImage,
            content : 'Total Calls from the last month, that are analyzed.'
        },
        errorRate : {
            title : 'Word Error Rate',
            subtitle : props.speechState.errorRate + '%',
            image : accuracyImage,
            content : 'The Word Error Rate for the Trained Audio Calls Data'
        }

    }

    return (
        <div className={classes.main}>


            <div className={classes.sub_div}>
                <Statbox data = {data.errorRate} />
                <Statbox data = {data.totalCalls} />
            </div>

            <div className={classes.bottom_div}>
                <LineChart/>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        speechState: state.speechState
    }
}


export default connect(mapStateToProps)(GeneralInfo);
