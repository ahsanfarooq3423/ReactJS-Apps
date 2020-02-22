import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faMapMarkedAlt, faLink, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import classes from './UserInfo.module.css';
import rootClasses from '../User.module.css';
import Skeleton from './Skeleton';


import UserInfo from './EditUserInfo/EditUserInfo';

const userinfo = props => {
    
    return (
        <Fragment>
        { props.userData ? <div className={classes.info}>
            {false ?<Fragment>
            <p className={classes.username}>{props.userData.name}</p>

            {props.infoState ?
                <Fragment>
                    <p className={classes.bio}>{props.userData.bio}</p>
                    <p className={classes.location}><FontAwesomeIcon icon={faMapMarkedAlt} /> {props.userData.location}</p>
                    <a href='https://www.google.com'
                        className={classes.website}>
                        <FontAwesomeIcon icon={faLink} />{props.userData.website}</a></Fragment> : null}


            <p className={classes.join}><FontAwesomeIcon icon={faCalendarWeek} />{props.userData.dateSeconds}</p>
            </Fragment>: <UserInfo/>}
            <div className={rootClasses.pencilIcon}>
                <FontAwesomeIcon icon={faPencilAlt} />
            </div>
        </div> : <Skeleton showInfo = {props.showInfo}/>}
        </Fragment>
    )
}

export default userinfo;