import React, { Component } from 'react';
import classes from './ProblemsInfo.module.css';

import Statbox from '../../GeneralComponents/Statbox/Statbox';

import { connect } from 'react-redux';

import phoneImage from '../../../images/statsbox/phone.png';
import problemImage from '../../../images/problem/problem.png'
import calmImage from '../../../images/statsbox/calm.png';
import angryImage from '../../../images/statsbox/angry.png';



class GeneralInfo extends Component {

    state = {
        totalCalls: {
            title: 'Total Calls',
            subtitle: this.props.totalCalls,
            image: phoneImage,
            content: 'Total Calls from the last month that are analyzed'
        },

        problemStats: []
    }

    componentDidMount() {
        let problemStats = [];
        problemStats = this.props.problemClasses.map(problem => {
            return {
                title: problem.category,
                subtitle: problem.number,
                image: problemImage,
                content: this.props.dataset
            }
        })

        this.setState({ problemStats })
    }



    data = {
        totalCalls: {
            title: 'Total Calls',
            subtitle: this.props.totalCalls,
            image: phoneImage,
            content: 'Total Calls from the last month, that are analyzed.'
        },
        calmCalls: {
            title: 'Calm Calls',
            subtitle: this.props.calmCalls,
            image: calmImage,
            content: 'Calm Calls 14% increase from the Last month'
        },
        angryCalls: {
            title: 'Angry Calls',
            subtitle: this.props.angryCalls,
            image: angryImage,
            content: 'Angry Calls decrease 20% from the last montth'
        },

    }

    render() {

        return (
            <div className={classes.main}>

                <div className={classes.sub_div1}>
                    <h3>General Numbers :</h3>
                    <Statbox data={this.data.totalCalls} />
                </div>
                <hr style={{ margin: '0px' }} />
                <div className={classes.sub_div2}>
                    {this.state.problemStats.length > 0 ?
                        this.state.problemStats.map(data => <Statbox data={data} key={data.subtitle} />)
                        : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        totalCalls: state.problemState.totalCalls,
        problemClasses: state.problemState.problemClasses,
        dataset: state.problemState.dataset
    }
}

export default connect(mapStateToProps, null)(GeneralInfo);