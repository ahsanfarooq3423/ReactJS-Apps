import React from 'react';
import HistoryTable from '../../GeneralComponents/HistoryTable/HistoryTable';
import Spinner from '../../UI/Spinner/Spinner';
import {connect} from 'react-redux';
import classes from './ProblemHistory.module.css';

const ProblemHistory = (props) => {
    return (
        <div className = {classes.main}>
            {!props.loading ? <HistoryTable 
                        data = {props.problemsHistory}
                        type = 'Problem (Issue)'
                        /> : <div className = {classes.spinner}><Spinner/> </div> }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        loading : state.problemState.loading,
        problemsHistory : state.problemState.problemsHistory
    }
}



export default connect(mapStateToProps, null)(ProblemHistory);