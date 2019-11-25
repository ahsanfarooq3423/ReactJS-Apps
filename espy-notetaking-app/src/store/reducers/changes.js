import * as actionTypes from '../actions';

const initialState = {
    
    currentTitle : '',
    currentContent : '',

    index : null,

    changeTitle : '',
    changeContent : ''

}


const reducer = (state = initialState, action) => {


    switch (action.type) {
        case actionTypes.TITLE:
            let title = action.value
            return {
                ...state,
                currentTitle : title
            }
        
        case actionTypes.CONTENT:
            let content = action.value
            return {
                ...state,
                currentContent : content
            }
        
        case actionTypes.INDEX:
            console.log(action)
            let index = action.index;
            let indexedTitle = action.notes[index].title
            let indexedContent = action.notes[index].content
            return {
                ...state,
                index : index,
                changeTitle : indexedTitle,
                changeContent: indexedContent
            }

        case actionTypes.CHANGETITLE:
            let editTitle = action.value;
            return {
                ...state,
                changeTitle : editTitle
            }

        case actionTypes.CHANGECONTENT:
            let editContent = action.value;
            return {
                ...state,
                changeContent : editContent
                }
    }

    return state;
}


export default reducer;