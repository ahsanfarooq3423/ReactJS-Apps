import React from 'react';
import classes from './GeneralStats.module.css';
import {connect} from 'react-redux';

import GroupBar from './Charts/BarChart';



const GeneralStats = (props) => {
    return (
        <div>
            <GroupBar {...props}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        problemClasses: state.problemState.problemClasses
    }
}

export default connect(mapStateToProps)(GeneralStats);