
import React, { PureComponent } from 'react';


import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Day 1', angry_calls: 4, calm_calls: 17,
  },
  {
    name: 'Day 2', angry_calls: 3, calm_calls: 16,
  },
  {
    name: 'Day 3', angry_calls: 5, calm_calls: 21,
  },
  {
    name: 'Day 4', angry_calls: 15, calm_calls: 19,
  },
  {
    name: 'Day 5', angry_calls: 12, calm_calls: 19,
  },
  {
    name: 'Day 6', angry_calls: 13, calm_calls: 19,
  },
  {
    name: 'Day 7', angry_calls: 10, calm_calls: 14,
  },
];

class GroupBar extends PureComponent {

  render() {
    return (
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 30, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="angry_calls" stackId="a" fill="red" />
        <Bar dataKey="calm_calls" stackId="a" fill= '#8884d8' />
      </BarChart>
    );
  }
}


export default GroupBar;
