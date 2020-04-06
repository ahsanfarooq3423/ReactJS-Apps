import React from 'react';
import classes from './GeneralStats.module.css';

import GroupBar from './Charts/BarChart';
// import PieChart from './Charts/PieChart';


const GeneralStats = (props) => {
    return (
        <div>
            <GroupBar/>
        </div>
    )
}

export default GeneralStats;