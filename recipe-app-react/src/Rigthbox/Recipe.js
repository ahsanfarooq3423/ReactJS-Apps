import React from 'react';
import styles from './Rigthbox.module.css';


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
           
        </div>
    )
}

export default recipe;