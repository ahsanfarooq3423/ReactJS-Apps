import React from 'react';
import classes from './Analytics.module.css';

import Nav from './Nav/Nav';

import FreqCount from './FreqCount/FreqCount';

const Analytics = () => {
    return (
        <div>
            <Nav/>
            <FreqCount/>
        </div>
    )
}

export default Analytics;