//global action types

export const TITLE = 'TITLE';
export const CONTENT = 'CONTENT';
export const SUBMIT = 'SUBMIT';
export const INDEX = 'INDEX';
export const CHANGETITLE = 'CHANGETITLE';
export const CHANGECONTENT = 'CHANGECONTENT';
export const SUBMITCHANGE = 'SUBMITCHANGE';
export const DELETE = 'DELETE';

//creating actionCreators

export const title = (event) => {
    return {
        type : TITLE,
        event : event

    }
}

export const content = (event) => {
    return {
        type : CONTENT,
        event : event
    }
}

export const submit = (con, tit) => {
    return {
        type : SUBMIT,
        content : con,
        title : tit
    }
}



