
const initialState = {
    visible: false
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_TRUE':
            return {
                ...state,
                visible: true
            }
        case 'INPUT_FALSE':
            return {
                ...state,
                visible: false
            }
        default:
            return state;
    }
}

export default reducer;