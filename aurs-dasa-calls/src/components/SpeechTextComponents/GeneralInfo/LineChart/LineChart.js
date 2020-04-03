import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Week 1',  TotalCalls: 30
  },
  {
    name: 'Week 2',  TotalCalls: 40
  },
  {
    name: 'Week 3',  TotalCalls: 23
  },
  {
    name: 'Week 4',  TotalCalls: 43
  },
  {
    name: 'Week 5',  TotalCalls: 54
  },
  {
    name: 'Week 6',  TotalCalls: 45
  },
  {
    name: 'Week 7',  TotalCalls: 23
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <LineChart
        width={600}
        height={370}
        data={data}
        margin={{
          top: 15, right: 30, left: 20, bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TotalCalls" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    );
  }
}
