import React, { PureComponent } from 'react';
import classes from './PieChart.module.css';
import {Badge} from 'react-bootstrap';

import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  { name: 'Call Calls', value: 280 },
  { name: 'Angry Calls', value: 65 }
];

const COLORS = ['#0088FE', '#fc0341'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {` ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
class Chart extends PureComponent {

  render() {
    return (
      <div className = {classes.main}>

        <div className = {classes.badges}>
        <Badge style = {{margin : '5%'}} variant="primary">Calm Calls</Badge>
         <Badge style = {{margin : '5%'}} variant="danger">Angry Calls</Badge>
        </div>
         



        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={210}
            cy={150}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </div>


    );
  }
}

export default Chart;


