import React from 'react';
import User from './User/User';
import MainSelector from './MainSelector/MainSelector';
import SubSelector from './SubSelector/SubSelector';

import { Link } from 'react-router-dom';

import { withRouter } from 'react-router';
import classes from './LeftDrawer.module.css';



const leftdrawer = (props) => {
    console.log(props)
    return (
        <div className={classes.main}>
            <User />
            <MainSelector name='dashboard' selected />
            <MainSelector name='home' />
            <div className={classes.break}> </div>
            <p className={classes.subtitle}>MODELS</p>

            <div className={classes.subselectors}>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/speech/live'>
                    <SubSelector selected name='calls to text' />
                </Link>

                <Link style={{ textDecoration: 'none', color: 'white' }} to='/sentiment/live'>
                    <SubSelector name='sentiment analysis' />
                </Link>


                <Link style={{ textDecoration: 'none', color: 'white' }} to='/data/live'>
                    <SubSelector name='data analytics' />
                </Link>

                <Link style={{ textDecoration: 'none', color: 'white' }} to='/problem/live'>
                    <SubSelector name='problem identification' />
                </Link>


                {/* <SubSelector
                    name='sentiment analysis' />
                <SubSelector
                    // onClick = {() => props.history.push('/speech/live')}
                    name='data analytics' />
                <SubSelector
                    onClick={() => props.history.push('/problem/live')}
                    name='problem identification' /> */}

            </div>
        </div>
    )
}

export default withRouter(leftdrawer);