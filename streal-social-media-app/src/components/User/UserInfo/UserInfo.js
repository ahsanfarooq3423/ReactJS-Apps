import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faMapMarkedAlt, faLink, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

import classes from './UserInfo.module.css';
import rootClasses from '../User.module.css';

const userinfo = props => {

    return (
        <div className={classes.info}>
            <p className={classes.username}>Pub Guy</p>

            {props.showInfo ?
                <Fragment>
                    <p className={classes.bio}>Hello I am New Here</p>
                    <p className={classes.location}><FontAwesomeIcon icon={faMapMarkedAlt} /> London UK</p>
                    <a href='https://www.google.com'
                        className={classes.website}>
                        <FontAwesomeIcon icon={faLink} /> www.pubguy.com</a></Fragment> : null}


            <p className={classes.join}><FontAwesomeIcon icon={faCalendarWeek} /> Joined Marched 2019</p>

            <div className={rootClasses.pencilIcon}>
                <FontAwesomeIcon icon={faPencilAlt} />
            </div>
        </div>
    )
}

export default userinfo;