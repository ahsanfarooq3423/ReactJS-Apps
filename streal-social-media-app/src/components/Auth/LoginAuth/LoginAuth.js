import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import FormErrors from '../FormErrors';
import classes from './LoginAuth.module.css';

import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';


class LoginAuth extends Component {

    state = {
        authForm: {
            email: {
                value: '',
                valid: false
            },
            password: {
                value: '',
                valid: false
            }
        },
        formErrors: { password: "", email: "" },
        formValid: false,
        formElementsArray: null
    }

    validateField(field, value) {
        let fieldValidationErrors = this.state.formErrors;
        let passwordValid = this.state.authForm[field].value;
        let emailValid = this.state.authForm[field].value;


        switch (field) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        let authForm = JSON.parse(JSON.stringify(this.state.authForm));
        authForm[field].valid = passwordValid;
        authForm[field].valid = emailValid;
        this.setState({
            formErrors: fieldValidationErrors,
            authForm: authForm
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.authForm.password.valid
                && this.state.authForm.email.valid
        });

    }

    onLoginHanlder = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.authForm) {
            formData[formElementIdentifier] = this.state.authForm[formElementIdentifier];
        }

        // this.props.history.push('/');
        this.props.onLogin(formData.email.value, formData.password.value);

    }

    inputChangeHanlder = (event, inputIdentifier) => {
        let value = event.target.value;
        let authForm = JSON.parse(JSON.stringify(this.state.authForm));
        authForm[inputIdentifier].value = value;
        this.setState({ authForm }, () => { this.validateField(inputIdentifier, value) });
    }

    render() {
        return (
            <div className={classes.main}>
                <h3>Login:</h3>
                <FormErrors formErrors={this.state.formErrors} />
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(event) => this.inputChangeHanlder(event, 'email')} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={(event) => this.inputChangeHanlder(event, 'password')}
                            type="password"
                            placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>
                <Button
                    onClick={this.onLoginHanlder}
                    disabled={!this.state.formValid}
                    className={classes.button}
                    variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin : (email, password) => dispatch(actions.auth(null ,email, password, false))
    }
}


export default connect(null, mapDispatchToProps)(LoginAuth);
