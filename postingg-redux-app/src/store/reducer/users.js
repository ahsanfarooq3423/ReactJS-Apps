import * as actionTypes from '../actions/actionTypes';


const initialState = {
    users : null
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
          case (actionTypes.START_USERS):

            return {
              ...state,
              users : action.users
            }
          default: return {
              ...state
            }
        }
}

export default reducer;

// [
//   { name: 'Joshua Megan',
//     id : '45a',
//     posts : ['54uu','49ae']
//   },
//   {
//     name : 'Barboda Gucci',
//     id : '43v',
//     posts : ['23mq']
//   },
//   {
//     name : 'Amelia Arkansa',
//     id : '87q',
//     posts : ['44de']
//   },
//   {
//     name : 'Madcon Beggin',
//     id : '62n',
//     posts : ['65hj']
//   }
// ]