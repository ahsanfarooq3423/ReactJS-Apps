import React, {useState, useEffect} from 'react';
import classes from './NgramCount.module.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Spinner from '../../UI/Spinner/Spinner';

import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

const NgramCount = (props) => {
    const [nGramData, setNgram] = useState([]);


    useEffect(() => {
        props.onStartNgram()
        if (props.analyticsState.nGramCount) {
            let temp = props.analyticsState.nGramCount.map(item => {
                return {
                    word : item[0].join(' '),
                    count : item[1]
                }
            })
            temp = temp.slice(0,20)
            setNgram(temp)
        }
    }, [props.analyticsState.nGramCount])

    return (
        <div className = {classes.main}>
           {nGramData.length > 0 ?<BarChart
                width={600}
                height={630}
                data={nGramData}
                layout="vertical"
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis type="number" />
                <YAxis type="category" dataKey="word" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="count" fill="red" barSize = {15} />
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
        onStartNgram : () => dispatch(actions.getNgramCount())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NgramCount);