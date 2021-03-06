import React from 'react';
import styles from './Leftbox.module.css';
//font-awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

//add new component button
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
//red genering box component
const RedBox = (props) => {
    return(
        <div>
        <div onClick = {props.removeAll} className = {styles.RedBox}> 
            <p>{props.boxName}</p>
        </div>
        
        
      </div>
    )
}

//yellow generic box component for the recipes showing
const YellowBox = (props) => {
    return(
        <div onClick = {(event) => props.showone(event)} className = {styles.YellowBox} key = {props.key}> 
            <p>{props.recipe.name}</p>
        </div>
    )
}



//complete left box component
const leftbox = (props) => {
    return(
        <div className = {styles.leftbox}>
            <div className = {styles.heading}>
            <FontAwesomeIcon icon= {faCoffee} size="lg" className = {styles.float}  />
            <h2 onClick ={props.homePage} className = {styles.heading}>Recipe Box Application</h2> 
            
            <AddNew addNew = {props.addNew} boxName = 'Add New Recipe' />
            <ShowAll showRecipes = {props.showRecipes} boxName = "Show All Recipes"/>
            <RedBox removeAll = {props.removeAll} boxName = "Remove All Recipes"/>

            <h6> The list of Recipes:</h6>

            {props.recipes.map((recipe) =>
            <YellowBox showone = {props.showone} recipe = {recipe} key = {recipe.id} show = {props.show}/>)}
            
            </div>
            
            
        </div>
    )
}


export default leftbox;