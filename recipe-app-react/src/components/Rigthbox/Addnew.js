import React from 'react';
import styles from './Rigthbox.module.css';

//addnew form sub components
const Submit = (props) => {
    return(
        <div onClick = {props.submit} className = {styles.GreenBox}> 
            <p>Submit Recipe</p>
        </div>
    )
}

const Cancel = (props) => {
    return(
        <div onClick = {props.homePage} className = {styles.RedBox}> 
            <p>Cancel</p>
        </div>
    )
}



const addNew = (props) => {
    return(
        <div className = {styles.addnew}>
            <input onChange = {props.getname} type="text" placeholder = 'Name'></input>
            <br></br>
            <textarea 
                    onChange = {props.getingredient} 
                    type="text" placeholder = "Ingredients" 
                    cols = "50" rows = "10" ></textarea>
            <br></br>
            <Submit submit = {props.submit}/>
            <Cancel homePage = {props.homePage}/>
        </div>
    )
}


export default addNew;