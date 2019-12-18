import React, { Component } from "react";
import Input from '../UI/Input/Input';
import FormErrors from './FormErrors';
import Spinner from '../UI/Spinner/Spinner';
import classes from './FormAuth.module.css';
import * as actions from '../../store/actions/index';
import Aux from '../../containers/hoc/Aux/Aux';
import {connect} from 'react-redux';


class LoginAuth extends Component {

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

        },
        formErrors : {password :"", email : "" },
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

        

        this.props.onAuth(formData.email.value, formData.password.value)
        
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

      
        switch(field) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
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
                });
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
                    <h3>Login</h3>
                    <p>Please fill in this form to Login</p>  
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
                type = "submit">Login</button>
                </form>
            </Aux>
        )
        if (this.props.loading) {
            show = <Spinner/>
        }
        return(
            <div className = {classes.main}>
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
        onAuth : (email, password) => dispatch(actions.auth(email, password, false))
         
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginAuth);