import * as actionTypes from '../actions/actionTypes';


const initialState = {
    fileData: null,
    fileType: null,
    fileStatus: false,
    loading: false,
    result: null,
    resultStatus: false,

    totalCalls: 222,

    problemClasses: [
        {
            category: "Problem :  Car has stopped running",
            id: 0,
            number: 34
        },
        {
            category: "Problem : Need to Activate the Car for Other Location (Out of City) etc.",
            id: 1,
            number: 43
        },
        {
            category: "Problem : Receiving Critical Alarms from the Car",
            id: 2,
            number: 45
        },
        {
            category: "Problem : Need to Know the Location of the Car",
            id: 3,
            number: 12
        },
        {
            category: "Problem : Need the Passport Code for TPL Trakker Mobile App",
            id: 4,
            number: 65

        },
        {
            category: "Problem : Battery Drainage Issue",
            id: 5,
            number: 23

        }
    ],

    dataset: 'TPL Tracker Data Set',

    problemsHistory : null


}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SET_FILE_TYPE):
            return {
                ...state,
                fileType: action.value
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
        case (actionTypes.PROBLEM_RESULT): {
            return {
                ...state,
                result: action.result,
                resultStatus: true
            }
        }
        case (actionTypes.SET_PROBLEMS_HISTORY):
            return {
                ...state,
                problemsHistory: action.data
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;