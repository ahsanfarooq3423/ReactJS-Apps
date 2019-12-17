import React, { Component } from "react";
import Input from '../UI/Input/Input';
import FormErrors from './FormErrors';
import classes from './FormAuth.module.css';


class authform extends Component {

    state = {
        authForm : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your Name'
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
            }
        },
        formErrors : {name :"", email : ""  },
        formValid : false


    }

    submitFormHandler = (event) => {
        //do the logic of only submitting the form if it is valid
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.authForm) {
            formData[formElementIdentifier] = this.state.authForm[formElementIdentifier];
        }
        console.log(formData);

    }

    inputChangeHanlder = (event, inputIdentifier) => {
        let value = event.target.value;
        let authForm = JSON.parse(JSON.stringify(this.state.authForm));
        authForm[inputIdentifier].value = value;
        this.setState({authForm}, () => { this.validateField(inputIdentifier, value) });

        
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.authForm[fieldName].value;
        let emailValid = this.state.authForm[fieldName].value;
        
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'name':
            nameValid = value.length >= 4;
            fieldValidationErrors.name = nameValid ? '': ' is too short';
            break;
          default:
            break;
        }
        let authForm = JSON.parse(JSON.stringify(this.state.authForm));
        authForm[fieldName].valid = nameValid;
        authForm[fieldName].valid = emailValid;
        this.setState({formErrors: fieldValidationErrors,
                        authForm : authForm
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.authForm.name.valid && this.state.authForm.email.valid});
      }


    render() {
        const formElementsArray = [];
        for (let key in this.state.authForm) {
            formElementsArray.push({
                id : key,
                config : this.state.authForm[key]
            })
        }

        return(
            <div className = {classes.main}>
                <div className  = {classes.title}>
                    <h3>{this.props.type}</h3>
                    {this.props.type.toUpperCase === "SignUp".toUpperCase ? <p>Please fill in this form to create an account!</p> : 
                    <p>Please fill in this form to Login</p> }
                    
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
                type = "submit">{this.props.type}</button>
                </form>
            </div>
        )
    }
    
}

export default authform;