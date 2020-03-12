import React, { Component, Fragment } from 'react';
import UserInfo from './UserInfo/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../UI/Spinner/Spinner';
import classes from './User.module.css';
import { connect } from 'react-redux';


class User extends Component {

    state = {
        infoState: false,
        userData: null,
        editState: true
    }


    setInfoHanlder = () => {
        this.setState(prevState => !prevState)
    }


    static getDerivedStateFromProps(props, state) {
        const userData = props.userData;
        if (userData) {
            if (userData.bio === "" || userData.website === "" || userData.location === "") {
                return {
                    infoState: false,
                    userData: userData
                }
            } else {
                return {
                    infoState: true,
                    userData: userData
                }
            }
        }
    }

    showEditHandler = () => {
        this.setState({ editState: true })
    }

    doneEditHanlder = () => {
        this.setState({ editState: false })
    }

    getEditedInfo = event => {
        event.preventDefault()
    }

    onSaveHandler = () => {
        this.setState({editState : false})
    }


    render() {
        const styles = [classes.mainCard];
        if (this.state.infoState) {
            styles.push(classes.height)
        }

        if (this.state.editState) {
            styles.push(classes.editHeight);
        }

        const main = (<div className={styles.join(' ')}>
            <div className={classes.profile}>
                <img className={classes.avatar}
                    src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1145&q=80' />
            </div>

            <div className={classes.pencilIcon}>
                <FontAwesomeIcon icon={faPencilAlt} />
            </div>
            <UserInfo
                getinfo={this.getEditedInfo}
                showedit={this.showEditHandler}
                doneedit={this.doneEditHanlder}
                saveedit = {this.onSaveHandler}
                showEditState={this.state.editState}
                userData={this.state.userData}
                showInfo={this.state.infoState} />
        </div>)

        return (
            <Fragment>
                {!this.props.loading ? main : null}
            </Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        userData: state.authState.userData,
        loading: state.authState.loading
    }
}


export default connect(mapStateToProps)(User);