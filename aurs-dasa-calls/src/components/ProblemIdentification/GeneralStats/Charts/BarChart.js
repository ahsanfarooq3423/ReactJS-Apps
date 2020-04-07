
import React, { PureComponent } from 'react';
import { ListGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import classes from './Chart.module.css';

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

import PieDataChart from './PieChart';

const data = [
  {
    name: 'Day 1', problem_1: 4, problem_2: 9, problem_3: 3, problem_4: 8, problem_5: 5, problem_6: 6
  },
  {
    name: 'Day 2', problem_1: 5, problem_2: 4, problem_3: 3, problem_4: 3, problem_5: 7, problem_6: 8
  },
  {
    name: 'Day 3', problem_1: 3, problem_2: 6, problem_3: 3, problem_4: 2, problem_5: 8, problem_6: 9
  },
  {
    name: 'Day 4', problem_1: 7, problem_2: 8, problem_3: 3, problem_4: 3, problem_5: 8, problem_6: 7
  },
  {
    name: 'Day 5', problem_1: 5, problem_2: 2, problem_3: 3, problem_4: 3, problem_5: 6, problem_6: 6
  },
  {
    name: 'Day 6', problem_1: 6, problem_2: 9, problem_3: 3, problem_4: 7, problem_5: 4, problem_6: 6
  },
  {
    name: 'Day 7', problem_1: 10, problem_2: 5, problem_3: 3, problem_4: 4, problem_5: 3, problem_6: 3
  },
];




class GroupBar extends PureComponent {

  state = {
    chart : 'Barchart'
  }

  chartChangeHandler = (chart) => {
    this.setState({chart})
  }

  render() {
    return (
      <div className = {classes.main}>
        <DropdownButton  variant = "dark" id="dropdown-basic-button" title={this.state.chart}>
          <Dropdown.Item onClick = {() => this.chartChangeHandler('Barchart')} >Barchart</Dropdown.Item>
          <Dropdown.Item onClick = {() => this.chartChangeHandler('Piechart')} >Piechart</Dropdown.Item>
        </DropdownButton>
        <div className={classes.bar_main}>
          <ListGroup >
            {this.props.problemClasses.map(problem =>
              <ListGroup.Item key={problem.id}> # {problem.id + 1} {problem.category}</ListGroup.Item>)}
          </ListGroup>
          {this.state.chart === 'Barchart' ? <BarChart
            width={880}
            height={500}
            data={data}
            margin={{
              top: 40, right: 40, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="problem_1" stackId="a" fill="#f5c440" />
            <Bar dataKey="problem_2" stackId="b" fill='#f55540' />
            <Bar dataKey="problem_3" stackId="c" fill='#40f54c' />
            <Bar dataKey="problem_4" stackId="d" fill='#4067f5' />
            <Bar dataKey="problem_5" stackId="e" fill='#4f4d52' />
            <Bar dataKey="problem_6" stackId="f" fill='black' />
          </BarChart> : <PieDataChart {...this.props}/>}
        </div>
      </div>
    )
  }
}


export default GroupBar;
