import React from 'react';
import Statbox from '../../GeneralComponents/Statbox/Statbox';
import {connect} from 'react-redux';
import classes from './GeneralStats.module.css';


import phoneImage from '../../../images/statsbox/phone.png';
import calmImage from '../../../images/statsbox/calm.png';
import angryImage from '../../../images/statsbox/angry.png';

import GroupBar from './GroupBar/GroupBar';
import PieChart from './PieChart/PieChart';


const GeneralStats = props => {
    const data = {
        totalCalls : {
            title : 'Total Calls',
            subtitle : props.totalCalls,
            image : phoneImage,
            content : 'Total Calls from the last month, that are analyzed.'
        },
        calmCalls : {
            title : 'Calm Calls',
            subtitle : props.calmCalls,
            image : calmImage,
            content : 'Calm Calls 14% increase from the Last month'
        },
        angryCalls : {
            title : 'Angry Calls',
            subtitle : props.angryCalls,
            image : angryImage,
            content : 'Angry Calls decrease 20% from the last montth'
        },

    }

    return (
        <div className = {classes.main}>
            
            
            <div className = {classes.sub_div}>
            <Statbox data = {data.totalCalls} />
           <Statbox data = {data.calmCalls}/>
           <Statbox data = {data.angryCalls} />
            </div>
           
            <div className = {classes.bottom_div}>
            <GroupBar/>
            <PieChart/>
            </div>
           
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalCalls : state.sentimentState.totalCalls,
        angryCalls : state.sentimentState.angryCalls,
        calmCalls : state.sentimentState.calmCalls
    }
}

export default connect(mapStateToProps,null)(GeneralStats);