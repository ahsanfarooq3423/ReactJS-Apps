//importing global actionType 
import * as actionTypes from '../actions/actions';



const initialState = {
    
    currentTitle : '',
    currentContent : '',

    index : null,

    changeTitle : '',
    changeContent : ''

}

//reducer deals with the storing fields like changeTitle, changeContent
//also deals with currentTitle and currentContent
const reducer = (state = initialState, action) => {


    switch (action.type) {
        //new note title
        case actionTypes.TITLE:
            let title = action.value
            return {
                ...state,
                currentTitle : title
            }
        
        case actionTypes.CONTENT:
            //new note content
            let content = action.value
            return {
                ...state,
                currentContent : content
            }
        
        case actionTypes.INDEX:
            //clicked note index
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
            //changed title on existing note
            let editTitle = action.value;
            return {
                ...state,
                changeTitle : editTitle
            }

        case actionTypes.CHANGECONTENT:
            //change content on existing note
            let editContent = action.value;
            return {
                ...state,
                changeContent : editContent
                }
    }

    return state;
}


export default reducer;