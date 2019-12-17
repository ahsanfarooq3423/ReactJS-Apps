import React, { Component } from "react";
import Input from '../../UI/Input/Input';
import FormErrors from './FormErrors';
class signup extends Component {

    state = {
        signupForm : {
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
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.signupForm) {
            formData[formElementIdentifier] = this.state.signupForm[formElementIdentifier];
        }
        console.log(formData);

    }

    inputChangeHanlder = (event, inputIdentifier) => {
        let value = event.target.value;
        let signupForm = JSON.parse(JSON.stringify(this.state.signupForm));
        signupForm[inputIdentifier].value = value;
        this.setState({signupForm}, () => { this.validateField(inputIdentifier, value) });

        
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.signupForm[fieldName].value;
        let emailValid = this.state.signupForm[fieldName].value;
        
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'name':
            nameValid = value.length >= 6;
            fieldValidationErrors.name = nameValid ? '': ' is too short';
            break;
          default:
            break;
        }
        let signupForm = JSON.parse(JSON.stringify(this.state.signupForm));
        signupForm[fieldName].valid = nameValid;
        signupForm[fieldName].valid = emailValid;
        this.setState({formErrors: fieldValidationErrors,
                        signupForm : signupForm
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }


    render() {
        const formElementsArray = [];
        for (let key in this.state.signupForm) {
            formElementsArray.push({
                id : key,
                config : this.state.signupForm[key]
            })
        }

        return(
            <div>
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
                <button type = "submit">SignUp</button>
                </form>
            </div>
        )
    }
    
}

export default signup;