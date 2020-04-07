import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell, Tooltip
} from 'recharts';

import { Badge } from 'react-bootstrap';
import classes from './Chart.module.css';


const COLORS = ['#f5c440', '#f55540', '#42c2f5', '#4067f5', '#4f4d52', 'black'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class PieDataChart extends PureComponent {

    render() {
        return (
            <div className = {classes.pie_main}>
                <div className={classes.badges}>
                    {COLORS.map((item,index) =>  <Badge style={{ margin: '1%', backgroundColor : item }} variant="danger">Problem {index +1}</Badge> )}
                </div>

                <PieChart width={800} height={800}>
                    <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
                    <Pie
                        data={this.props.problemClasses}
                        cx={400}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="number"
                    >
                        {
                            this.props.problemClasses.map((entry, index) => 
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                </PieChart>

            </div>
        );
    }
}

