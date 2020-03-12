import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './EditUserInfo.module.css';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';



class Edituserinfo extends Component {

    state = {
        userId : null,
        name: null,
        bio: null,
        location: null,
        website: null,
        error : null
    }

    nameChangeHanlder = e => {
        this.setState({ name: e.target.value })
    }

    bioChangeHanlder = e => {
        this.setState({ bio: e.target.value })
    }

    locationChangeHanlder = e => {
        this.setState({ location: e.target.value })
    }

    websiteChangeHandler = e => {
        this.setState({ website: e.target.value })
    }

    
    componentDidMount() {
        const { userId ,name, bio, location, website } = this.props.userData;
        this.setState({ userId, name, bio, location, website })
    }
    
    errorNullHandler = () => {
        this.setState({error : null})
    }
    
    onEditSaveHandler = () => {
        if (this.state.name.trim() === "") {
            return this.setState({ error: 'Name cannot be empty' })
        } 
        this.props.onUpdateInfo(this.state);
    }



    render() {
        return (
            <React.Fragment>
                <form id="submit-edit" className={classes.root} noValidate autoComplete="off">
                    {this.state.error ?<Alert
                                    onClose = {this.errorNullHandler} 
                                    variant="danger" 
                                    dismissible>{this.state.error}</Alert>: null}
                    <TextField
                        id="standard-basic"
                        label="Name"
                        onChange={this.nameChangeHanlder}
                        defaultValue={this.props.userData.name} />
                    <TextField
                        id="standard-basic"
                        label="Bio"
                        onChange={this.bioChangeHandler}
                        defaultValue={this.props.userData.bio} />
                    <TextField
                        id="standard-basic"
                        label="Location"
                        onChange={this.locationChangeHandler}
                        defaultValue={this.props.userData.location} />
                    <TextField
                        id="standard-basic"
                        label="Website"
                        onChange={this.websiteChangeHandler}
                        defaultValue={this.props.userData.website} />
                    <div className={classes.layout}>
                        <div className={classes.button}>
                            <Button
                                onClick={this.props.doneedit}
                                variant="contained"
                                size="small"
                                color="secondary">Cancel</Button>
                        </div>
                        <div className={classes.button} >
                            <Button
                                onClick={this.onEditSaveHandler}
                                variant="contained"
                                size="small"
                                color="primary">Save</Button>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return  {
        onUpdateInfo : (userData) => dispatch(actions.updateUserInfo(userData)),
        onInitScreens : () => dispatch(actions.initScreens())
    }
}


export default connect(null, mapDispatchToProps)(Edituserinfo);
