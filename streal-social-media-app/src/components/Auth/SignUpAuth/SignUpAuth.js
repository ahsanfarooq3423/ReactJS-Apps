import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import FormErrors from '../FormErrors';
import classes from './SignUpAuth.module.css';


class LoginAuth extends Component {

    state = {
        authForm: {
            username: {
                value: '',
                valid: false
            },
            email: {
                value: '',
                valid: false
            },
            password: {
                value: '',
                valid: false
            }
        },
        formErrors: { username: "", password: "", email: "" },
        formValid: false,
        formElementsArray: null
    }

    validateField(field, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.authForm[field].value;
        let passwordValid = this.state.authForm[field].value;
        let emailValid = this.state.authForm[field].value;


        switch (field) {
            case 'username':
                usernameValid = value.length > 7;
                fieldValidationErrors.username = usernameValid ? '' : ' should be greater than 7 characters';
            case 'email':
                console.log('email case')
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                console.log('email case', emailValid)
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        let authForm = this.state.authForm;
        // authForm[field].valid = usernameValid;
        authForm[field].valid = emailValid;
        authForm[field].valid = passwordValid;
        this.setState({
            formErrors: fieldValidationErrors,
            authForm: authForm
        }, this.validateForm);
    }

    validateForm() {
        console.log(this.state.authForm.password.valid)
        console.log(this.state.authForm.email.valid)
        this.setState({
            formValid: this.state.authForm.password.valid
                && this.state.authForm.email.valid 
        });
    }

    temp = () => {
        console.log('CHANGED');
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
                <h1>{this.state.formValid.toString()}</h1>
                <h3>SignUp:</h3>
                <FormErrors formErrors={this.state.formErrors} />
                <Form>

                    <Form.Group controlId="formBasicUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="username"
                            placeholder="Enter username"
                            onChange={(event) => this.inputChangeHanlder(event, 'username')} />
                        <Form.Text className="text-muted">
                            Please Enter your username.
                     </Form.Text>
                    </Form.Group>

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
                    onClick={this.temp}
                    disabled={!this.state.formValid}
                    className={classes.button}
                    variant="primary" type="submit">
                    SignUp
                </Button>
            </div>
        )
    }
}

export default LoginAuth;
