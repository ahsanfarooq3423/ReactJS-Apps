
const initialState = {
    users : [
        { name: 'Joshua Megan',
          id : '45a',
          posts : ['54uu','49ae']
        },
        {
          name : 'Barboda Gucci',
          id : '43v',
          posts : ['23mq']
        },
        {
          name : 'Amelia Arkansa',
          id : '87q',
          posts : ['44de']
        },
        {
          name : 'Madcon Beggin',
          id : '62n',
          posts : ['65hj']
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