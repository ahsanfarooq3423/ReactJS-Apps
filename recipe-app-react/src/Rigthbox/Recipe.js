import React from 'react';
import styles from './Rigthbox.module.css';


const Edit = (props) => {
    return(
        <div className = {styles.edit}>
            <p>Edit the name of the recipe:</p>
            <input type="text" placeholder = 'Name'></input>
            <br></br>
            <p>Edit the ingredients:</p>
            <textarea  
                    type="text" placeholder = "Ingredients" 
                    cols = "50" rows = "10" ></textarea>
           
            <button className ={styles.editred} type="button">Submit Edit</button>
            <button className = {styles.editblue} type="button">Cancel</button>
        </div>
    )
}

const recipe = (props) => {
    return(
        
        <div className = {styles.recipe}>
                <h3>{props.recipe.name}</h3>
                <button className = {styles.red} >Delete this Page</button>
                <button className = {styles.blue}>Edit this Page</button>
                <br></br>
            
            <hr></hr>
           
                <h3>Ingredients:</h3>
                <p>{props.recipe.ingredients}</p>

                <Edit/>

           
        </div>
    )
}

export default recipe;