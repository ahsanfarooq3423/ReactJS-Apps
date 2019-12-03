
const initialState = {
    users : [
        { name: 'Joshua Megan',
          id : '45a',
          posts : ['54uu','49ae']
        }
    ]
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
          default: return {
              ...state
            }
        }
}

export default reducer;