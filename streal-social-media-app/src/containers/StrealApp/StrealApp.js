import React, { Component, Fragment } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Screens from '../../components/Screens/Screens';
import User from '../../components/User/User';
import LoginAuth from '../../components/Auth/LoginAuth/LoginAuth';
import SignUpAuth from '../../components/Auth/SignUpAuth/SignUpAuth';
import { Switch, Route } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';


class StrealApp extends Component {

        componentDidMount() {
            this.props.onAppStart()
        }

        render() {
            return (
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={() => <Fragment><User /><Screens /></Fragment>} />
                        <Route path="/login" exact component={() => <LoginAuth />} />
                        <Route path="/signup" exact component={() => <SignUpAuth />} />
                    </Switch>
                </Fragment>
            )
        }
    }

const mapDispatchToProps = dispatch => {
    return {
        onAppStart : () => dispatch(actions.authCheckState())
    }
}

export default connect(null, mapDispatchToProps)(StrealApp);