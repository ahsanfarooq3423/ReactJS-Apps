import React from 'react';
import HistoryTable from '../../GeneralComponents/HistoryTable/HistoryTable';
import Spinner from '../../UI/Spinner/Spinner';
import {connect} from 'react-redux';
import classes from './SentimentHistory.module.css';

const SentimentHistory = (props) => {
    return (
        <div className = {classes.main}>
            {!props.loading ? <HistoryTable 
                        data = {props.sentimentHistory}
                        type = 'Sentiment'
                        /> : <div className = {classes.spinner}><Spinner/> </div> }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        loading : state.sentimentState.loading,
        sentimentHistory : state.sentimentState.sentimentHistory
    }
}

export default connect(mapStateToProps, null)(SentimentHistory);