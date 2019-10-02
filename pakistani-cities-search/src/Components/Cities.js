import React from 'react';
import './Cities.css'
import { tsPropertySignature } from '@babel/types';

const cities = ( props ) => {
    return(
        
        <div className = 'cities'>
            <ul>
                //searching if the input word is empty
                { (props.search.length == 0) ?
                    //if empty render all the cities
                    props.names.map( cityObject => {return   <li>{cityObject.name}</li>}) 
                    //else render the search cities only
                :   props.searchCities.map( cityObject => {return   <li>{cityObject}</li>}) 

                }
            </ul>
        </div>
    )
}


export default cities;