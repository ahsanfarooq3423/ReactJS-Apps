import React from 'react';
import styles from './Rigthbox.module.css';

//the recipe box component render in the right box

//edit component nested inside the recipe compoent to edit the recipe
const Edit = (props) => {
    return(
        <div className = {styles.edit}>
            <p>Edit the name of the recipe:</p>
            <input
                onChange = {props.editName} 
                type="text" 
                placeholder = 'Name'  
                onChange = {props.editName}
                defaultValue = {props.name}></input>
            <br></br>
            <p>Edit the ingredients:</p>
            <textarea
                    onChange = {props.editIngredient}
                    defaultValue = {props.ingredients}  
                    type="text" placeholder = "Ingredients" 
                    cols = "50" rows = "10" ></textarea>
           
            <button onClick = {props.submitEdit} className ={styles.editred} type="button">Submit Edit</button>
            <button className = {styles.editblue} type="button">Cancel</button>
        </div>
    )
}

//the recipe box component
const recipe = (props) => {
    return(
        
        <div className = {styles.recipe}>
                <h3>{props.recipe.name}</h3>
                <button
                    onClick = {(event) =>props.deleteRecipe(event, "value")} 

                    value = {props.recipe.name} className = {styles.red} >Delete this Page</button>
                <button 
                    onClick = {(event) =>props.editRecipe(event, "value")} 
                    value = {props.recipe.name} className = {styles.blue}>Edit this Page</button>
                <br></br>
            
            <hr></hr>
           
                <h3>Ingredients:</h3>
                <p>{props.recipe.ingredients}</p>
                
                {props.edit ? <Edit
                            
                            submitEdit = {props.submitEdit}
                            editIngredient = {props.editIngredient}
                            editName = {props.editName}  
                            name = {props.recipe.name} 
                            ingredients = {props.recipe.ingredients} />:null}

           
        </div>
    )
}

export default recipe;