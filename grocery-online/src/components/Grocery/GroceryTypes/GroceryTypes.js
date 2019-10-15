import React from 'react';


const grocerytypes = (props) => {
    return(
        <div>
            <ul>
                <li>All Categories</li>
                {props.types.map(type => {
                    return <li> {type} </li>
                })}
            </ul>
        </div>
    )
}


export default grocerytypes;