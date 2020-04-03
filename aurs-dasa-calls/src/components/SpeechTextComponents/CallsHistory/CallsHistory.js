import React from 'react';
import Table from './Table/Table';
import classes from './CallsHistory.module.css';

const CallsHistory = (props) => {
    return (
        <div className = {classes.main}>
            <Table/>
        </div>
    )
}

export default CallsHistory;
