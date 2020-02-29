import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './EditUserInfo.module.css';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/core/Alert';



class Edituserinfo extends Component {

    state = {
        name: null,
        bio: null,
        location: null,
        website: null
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

    onEditSaveHandler = () => {
        console.log(this.state)
        if (this.state.name.trim() === ""){
            
        }
    }

    componentDidMount() {
        const {name, bio, location, website} = this.props.userData;
        this.setState({name,bio,location,website})
    }

    render() {
        return (
            <React.Fragment>
                <form id="submit-edit" className={classes.root} noValidate autoComplete="off">
                    <Alert severity="error">This is an error alert — check it out!</Alert>
                    <TextField
                        id="standard-basic"
                        label="Name"
                        onChange = {this.nameChangeHanlder}
                        defaultValue={this.props.userData.name} />
                    <TextField
                        id="standard-basic"
                        label="Bio"
                        onChange = {this.bioChangeHandler}
                        defaultValue={this.props.userData.bio} />
                    <TextField
                        id="standard-basic"
                        label="Location"
                        onChange = {this.locationChangeHandler}
                        defaultValue={this.props.userData.location} />
                    <TextField
                        id="standard-basic"
                        label="Website"
                        onChange = {this.websiteChangeHandler}
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

export default Edituserinfo;
