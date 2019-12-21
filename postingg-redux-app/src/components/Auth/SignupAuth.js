import React, { Component } from "react";
import Input from '../UI/Input/Input';
import FormErrors from './FormErrors';
import Spinner from '../UI/Spinner/Spinner';
import Aux from '../../containers/hoc/Aux/Aux'
import classes from './FormAuth.module.css';
import * as actions from '../../store/actions/index';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';


class SignupAuth extends Component {

    state = {
        authForm : {
            password : {
                elementType : 'input',
                elementConfig : {
                    type : 'password',
                    placeholder : 'Your password'
                },
                value : '',
                valid : false
            },
            email : {
                elementType : 'input',
                elementConfig : {
                    type : 'email',
                    placeholder : 'Your Email'
                },
                value : '',
                valid : false
            },
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your Name'
                },
                value : '',
                valid : false
            }
        },
        formErrors : {password :"", email : "" , name : "" },
        formValid : false,
        formElementsArray : null
    }

    submitFormHandler = (event) => {
        //do the logic of only submitting the form if it is valid
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.authForm) {
            formData[formElementIdentifier] = this.state.authForm[formElementIdentifier];
        }

        this.props.history.push("/")
        this.props.onAuth(formData.email.value, formData.password.value, formData.name.value)

    }

    inputChangeHanlder = (event, inputIdentifier) => {
        let value = event.target.value;
        let authForm = JSON.parse(JSON.stringify(this.state.authForm));
        authForm[inputIdentifier].value = value;
        this.setState({authForm}, () => { this.validateField(inputIdentifier, value) });
        
    }

    validateField(field, value) {
        let fieldValidationErrors = this.state.formErrors;
        let passwordValid = this.state.authForm[field].value;
        let emailValid = this.state.authForm[field].value;
        let nameValid  = this.state.authForm[field].value;
      
        switch(field) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'name':
            nameValid = value.length >= 4;
            fieldValidationErrors.name = nameValid ? '': ' is too short';
            break;
          case 'password':
            passwordValid = value.length >= 4;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        let authForm = JSON.parse(JSON.stringify(this.state.authForm));
        authForm[field].valid = passwordValid;
        authForm[field].valid = emailValid;
        this.setState({formErrors: fieldValidationErrors,
                        authForm : authForm
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.authForm.password.valid 
                && this.state.authForm.email.valid 
                && this.state.authForm.name.valid});
      }



    render() {
        const formElementsArray = [];
        for (let key in this.state.authForm) {
            formElementsArray.unshift({
                id : key,
                config : this.state.authForm[key]
            })
        }
        let show = (
            <Aux>
                <div className  = {classes.title}>
                    <h3>Sign Up</h3>
                    <p>Please fill in this form to create an account!</p> 
                </div>
                
                <FormErrors formErrors={this.state.formErrors} />
                <form onSubmit = {this.submitFormHandler}>
                {formElementsArray.map(element => {
                    return <Input
                        changed = {(event) => this.inputChangeHanlder(event, element.id )}
                        key = {element.id}
                        value = {element.value} 
                        elementType = {element.config.elementType} 
                        elementConfig = {element.config.elementConfig}/>
                })}
                <button
                className = {classes.submit} 
                disabled={!this.state.formValid}
                type = "submit">Sign Up</button>
                </form>
            </Aux>
        )

        if (this.props.loading) {
            show = <Spinner/>
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p>{this.props.error.message}</p>
        }
        
        return(
            <div className = {classes.main}>
                {errorMessage}
                {show}
            </div>
        )
    } 
}


const mapStateToProps = state => {
    return {
        loading : state.authState.loading,
        error : state.authState.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth : (email, password, name) => dispatch(actions.auth(email, password, true , name))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupAuth));