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
        },
        
    ],
    currentTitle : '',
    currentContent : '',

    index : null,

    changeTitle : '',
    changeContent : ''

}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'TITLE':
            let title = action.value
            return {
                ...state,
                currentTitle : title
            }
        
        case 'CONTENT':
            let content = action.value
            return {
                ...state,
                currentContent : content
            }
        
        case 'SUBMIT':
            
            let newTitle = state.currentTitle
            let newContent = state.currentContent

            if (newTitle.length > 0) {
                return {
                    ...state,
                    notes :  state.notes.concat({title : newTitle, content: newContent, color: 'teal'}),
                    currentTitle : '',
                    currentContent : ''
                }
            }
        
        case 'INDEX':
            let index = action.index;
            let indexedTitle = state.notes[index].title
            let indexedContent = state.notes[index].content
            return {
                ...state,
                index : index,
                changeTitle : indexedTitle,
                changeContent: indexedContent
            }
            


        case 'CHANGETITLE':
            let editTitle = action.value;
            return {
                ...state,
                changeTitle : editTitle
            }

        case 'CHANGECONTENT':
            let editContent = action.value;
            return {
                ...state,
                changeContent : editContent
                }

        case 'SUBMITCHANGE':
            let notes = state.notes;
            notes[state.index] = {title : state.changeTitle , content : state.changeContent}

            return {
                ...state,
                notes : notes
            }

        case 'DELETE':
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