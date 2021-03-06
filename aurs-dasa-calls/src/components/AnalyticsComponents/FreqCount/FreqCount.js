import React, {useState, useEffect} from 'react';
import classes from './FreqCount.module.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Spinner from '../../UI/Spinner/Spinner';

import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

const FreqCount = (props) => {
    const [freqCountData, setFreqCount] = useState([]);


    useEffect(() => {
        props.onStartFreq()
        if (props.analyticsState.freqCount) {
            let temp = props.analyticsState.freqCount.map(item => {
                return {
                    word : item[0],
                    count : item[1]
                }
            })
            temp = temp.slice(0,20)
            setFreqCount(temp)
        }
    }, [props.analyticsState.freqCount])

    return (
        <div className = {classes.main}>
           {freqCountData.length > 0 ?<BarChart
                width={600}
                height={630}
                data={freqCountData}
                layout="vertical"
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis type="number" />
                <YAxis type="category" dataKey="word" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" barSize = {15} />
            </BarChart> : <Spinner/> } 
        </div>
    )
}


const mapStateToProps = state => {
    return {
        analyticsState: state.analyticsState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartFreq : () => dispatch(actions.getFreqCount())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FreqCount);