import React, { useState, useEffect } from 'react';
import User from './User/User';
import MainSelector from './MainSelector/MainSelector';
import SubSelector from './SubSelector/SubSelector';

import { Link } from 'react-router-dom';

import { withRouter } from 'react-router';
import classes from './LeftDrawer.module.css';



const Leftdrawer = (props) => {
    let path = props.location.pathname;

    let [active, setActive] = useState([false, false, false, false])

    const activeLinkHandler = (i) => {
        active = active.map((element, index) => {
            if (i === index) {
                return true
            } else {
                return false
            }
        })
        setActive(active)
    }

    useEffect(() => {
        let path_arr = path.split('/');
        if (path_arr[2] === 'speech') {
            setActive([true, false, false, false])
        } else if (path_arr[2] === 'sentiment') {
            setActive([false, true, false, false])
        } else if (path_arr[2] === 'analytics') {
            setActive([false, false, true, false])
        } else if (path_arr[2] === 'problem') {
            setActive([false, false, false, true])
        }
    }, [props.location.pathname])



    return (
        <div className={classes.main}>
            <User />
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard/speech/live'>
                <MainSelector name='dashboard' selected />
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>
            <MainSelector name='home' />
            </Link>
            <div className={classes.break}> </div>
            <p className={classes.subtitle}>MODELS</p>

            <div className={classes.subselectors}>
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard/speech/live'>
                    <SubSelector
                        click={activeLinkHandler.bind(this, 0)}
                        selected={active[0]} name='calls to text' />
                </Link>

                <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard/sentiment/live'>
                    <SubSelector
                        click={activeLinkHandler.bind(this, 1)}
                        selected={active[1]} name='sentiment analysis' />
                </Link>


                <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard/analytics/freq'>
                    <SubSelector
                        click={activeLinkHandler.bind(this, 2)}
                        selected={active[2]} name='data analytics' />
                </Link>

                <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard/problem/live'>
                    <SubSelector
                        click={activeLinkHandler.bind(this, 3)}
                        selected={active[3]} name='problem identification' />
                </Link>

            </div>
        </div>
    )
}

export default withRouter(Leftdrawer);