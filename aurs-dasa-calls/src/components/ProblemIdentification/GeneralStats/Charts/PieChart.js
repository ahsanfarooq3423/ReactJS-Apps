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
                    {/* <Badge style={{ margin: '1%', backgroundColor : 'black' }} variant="primary">Calm Calls</Badge>
                    <Badge style={{ margin: '1%' }} variant="danger">Angry Calls</Badge>
                    <Badge style={{ margin: '1%' }} variant="primary">Calm Calls</Badge>
                    <Badge style={{ margin: '1%' }} variant="danger">Angry Calls</Badge>
                    <Badge style={{ margin: '1%' }} variant="primary">Calm Calls</Badge>
                    <Badge style={{ margin: '1%' }} variant="danger">Angry Calls</Badge> */}
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
                            this.props.problemClasses.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                </PieChart>

            </div>
        );
    }
}


// {
//     category: "Problem :  Car has stopped running",
//     id: 0,
//     number: 34
// },
// {
//     category: "Problem : Need to Activate the Car for Other Location (Out of City) etc.",
//     id: 1,
//     number: 43
// },
// {
//     category: "Problem : Receiving Critical Alarms from the Car",
//     id: 2,
//     number: 45
// },
// {
//     category: "Problem : Need to Know the Location of the Car",
//     id: 3,
//     number: 12
// },
// {
//     category: "Problem : Need the Passport Code for TPL Trakker Mobile App",
//     id: 4,
//     number: 65

// },
// {
//     category: "Problem : Battery Drainage Issue",
//     id: 5,
//     number: 23

// }
