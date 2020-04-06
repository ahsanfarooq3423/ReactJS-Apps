import * as actionTypes from '../actions/actionTypes';


const initialState = {
    fileData: null,
    fileType : null,
    fileStatus: false,
    loading: false,
    result : null,
    resultStatus : false,

    problemClasses : [
        {
          category: "Car has stopped running"
        },
        {
          category: "Need to Activate the Car for Other Location (Out of City) etc."
        },
        {
          category: "Receiving Critical Alarms from the Car"
        },
        {
          category: "Need to Know the Location of the Car"
        },
        {
          category: "Need the Passport Code for TPL Trakker Mobile App"
        },
        {
            category: "Battery Drainage Issue"
        }
      ],

      dataset : 'TPL Tracker Data Set'

    
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SET_FILE_TYPE):
            return {
                ...state,
                fileType : action.value
            }
        case (actionTypes.SET_PROBLEM_FILE):
            return {
                ...state,
                fileData: action.fileData,
                fileStatus: true
            }
        case (actionTypes.RESET_PROBLEM_FILE):
            return {
                ...state,
                fileData: null,
                fileStatus: false,
                loading: false,
                result: null,
                resultStatus: false
            }
        case (actionTypes.PROBLEM_LOADING): {
            return {
                ...state,
                loading: action.value
            }
        }
        case (actionTypes.PROBLEM_RESULT) : {
            return {
                ...state,
                result: action.result,
                resultStatus: true
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default reducer;