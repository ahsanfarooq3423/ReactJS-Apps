import * as actionTypes from '../actions/actions';

const initialState = {
    notes : [
        { title : 'Momento mori',
          content : 'hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the',
          color : 'blue'
        },
        { title : 'House of Cards',
          content : 'hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the',
          color : 'green'
        },
        { title : 'Joe Rogan',
          content : 'hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the',
          color : 'teal'
        }
        
    ]

}

//reducer deals with the updates of the notes array which contains all the notes
const reducer = (state = initialState, action) => {

    switch (action.type) {
        //submit a newnote to the note array
        case actionTypes.SUBMIT:
            let newTitle = action.title;
            let newContent = action.content;
            //console.log(action);
            if (newTitle.length > 0) {
                return {
                    ...state,
                    //updating notes immutably
                    notes :  state.notes.concat({title : newTitle, content: newContent, color: 'teal'}),
                    currentTitle : '',
                    currentContent : ''
                }
            }

        //submit an existing note with the followed changes
        case actionTypes.SUBMITCHANGE:
            let notes = state.notes;
            notes[action.index] = {title : action.changeTitle , content : action.changeContent}
            return {
                ...state,
                notes : notes
            }

        //delete the clicked existing note
        case actionTypes.DELETE:
            let copyNotes = state.notes
            let updatedNotes = copyNotes.filter((filter,index) => {
                return index !== action.index
            })
            return {
                ...state,
                notes : updatedNotes
            }

    }

    return state;
}


export default reducer;