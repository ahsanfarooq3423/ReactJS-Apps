import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faMapMarkedAlt, faLink, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import classes from './UserInfo.module.css';
import rootClasses from '../User.module.css';
import Skeleton from './Skeleton';
import EditUserInfo from './EditUserInfo/EditUserInfo';

const userinfo = props => {
    console.log(props.userData)
    return (
        <Fragment>
        { props.userData ? <div className={classes.info}>
            {!props.showEditState ?<Fragment>
            <p className={classes.username}>{props.userData.name}</p>

            {props.infoState ?
                <Fragment>
                    <p className={classes.bio}>{props.userData.bio}</p>
                    <p className={classes.location}><FontAwesomeIcon icon={faMapMarkedAlt} /> {props.userData.location}</p>
                    <a href='https://www.google.com'
                        className={classes.website}>
                        <FontAwesomeIcon icon={faLink} />{props.userData.website}</a></Fragment> : null}
            <p className={classes.join}><FontAwesomeIcon icon={faCalendarWeek} />{props.userData.dateSeconds}</p>
            </Fragment>: <EditUserInfo 
                            getinfo = {props.getinfo}
                            userData = {props.userData}
                            saveedit = {props.saveedit} 
                            doneedit = {props.doneedit}/>}
            
            {!props.showEditState ?<div className={rootClasses.pencilIcon} onClick = {props.showedit}>
                <FontAwesomeIcon icon={faPencilAlt} />
            </div>: null}
        </div> : <Skeleton showInfo = {props.showInfo}/>} 
        </Fragment>
    )
}

export default userinfo;