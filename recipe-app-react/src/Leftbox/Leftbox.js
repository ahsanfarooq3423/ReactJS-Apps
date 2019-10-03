import React from 'react';
import styles from './Leftbox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const AddNew = (props) => {
    return(
        <div onClick = {props.addNew} className = {styles.GreenBox}> 
            <p>{props.boxName}</p>
        </div>
    )
}

const ShowAll = (props) => {
    return(
        <div onClick = {props.showRecipes} className = {styles.GreenBox}> 
            <p>{props.boxName}</p>
        </div>
    ) 
}

const RedBox = (props) => {
    return(
        <div className = {styles.RedBox}> 
            <p>{props.boxName}</p>
        </div>
    )
}

const YellowBox = (props) => {
    return(
        <div className = {styles.YellowBox}> 
            <p>{props.recipe.name}</p>
        </div>
    )
}



const leftbox = (props) => {
    return(
        <div className = {styles.leftbox}>
            <div className = {styles.heading}>
            <FontAwesomeIcon icon= {faCoffee} size="lg" className = {styles.float}  />
            <h2 onClick ={props.homePage} className = {styles.heading}>Recipe Box Application</h2> 
            
            <AddNew addNew = {props.addNew} boxName = 'Add New Recipe' />
            <ShowAll showRecipes = {props.showRecipes} boxName = "Show All Recipes"/>
            <RedBox boxName = "Remove All Recipes"/>

            <h6> The list of Recipes:</h6>

            {props.recipes.map((recipe) =>
            <YellowBox recipe = {recipe} key = {recipe.id} show = {props.show}/>)}
            
            </div>
            
            
        </div>
    )
}


export default leftbox;