import React, { Component } from 'react';
import UserInfo from './UserInfo/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import classes from './User.module.css';


class User extends Component {

    state = {
        infoState : true
    }

    setInfoHanlder = ()  => {
        this.setState(prevState => !prevState)
    }

    render() {
        const styles = [classes.mainCard];

        if (this.state.infoState) {
            styles.push(classes.height)
        }

        return (
            <div className= {styles.join(' ')}>
                <div className={classes.profile}>
                    <img className={classes.avatar} src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1145&q=80' />
                </div>

                <div className={classes.pencilIcon}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </div>
                <UserInfo showInfo = {this.state.infoState} setShowInfo = {this.setInfoHanlder} />
            </div>
        )
    }
}


export default User;