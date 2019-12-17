import React from 'react';

const formerrors = (props) => {
    return(
        <div>
            {Object.keys(props.formErrors).map((fieldName, i) => {
                if (props.formErrors[fieldName].length > 0){
                    return (
                    <p key = {i}>{fieldName} {props.formErrors[fieldName]}</p>
                    )
                } else {
                    return '';
                }
            })}
        </div>
    )
}

export default formerrors;