import React, {useState, useEffect} from 'react';
import classes from './FreqCount.module.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import {connect} from 'react-redux';

const data = [
    {
        name: 'Page A', pv: 2400
    },
    {
        name: 'Page B', pv: 1398
    },
    {
        name: 'Page C', pv: 9800
    },
    {
        name: 'Page D', pv: 3908
    },
    {
        name: 'Page E', pv: 4800
    },
    {
        name: 'Page F', pv: 3800
    },
    {
        name: 'Page G', pv: 4300
    },
    {
        name: 'Page A', pv: 2400
    },
    {
        name: 'Page B', pv: 1398
    },
    {
        name: 'Page C', pv: 9800
    },
    {
        name: 'Page D', pv: 3908
    },
    {
        name: 'Page E', pv: 4800
    },
    {
        name: 'Page F', pv: 3800
    },
    {
        name: 'Page G', pv: 4300
    },
    {
        name: 'Page D', pv: 3908
    },
    {
        name: 'Page E', pv: 4800
    },
    {
        name: 'Page F', pv: 3800
    },
    {
        name: 'Page G', pv: 4300
    }
    
];


const getIntroOfPage = (label) => {
    if (label === 'Page A') {
        return "Page A is about men's clothing";
    } if (label === 'Page B') {
        return "Page B is about women's dress";
    } if (label === 'Page C') {
        return "Page C is about women's bag";
    } if (label === 'Page D') {
        return 'Page D is about household goods';
    } if (label === 'Page E') {
        return 'Page E is about food';
    } if (label === 'Page F') {
        return 'Page F is about baby food';
    }
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="intro">{getIntroOfPage(label)}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
};


const FreqCount = (props) => {

    useEffect(() => {

    })

    return (
        <div className = {classes.main}>
            <BarChart
                width={600}
                height={620}
                data={data}
                layout="vertical"
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="pv" fill="#8884d8" barSize = {20} />
            </BarChart>
        </div>
    )
}

export default connect()(FreqCount);