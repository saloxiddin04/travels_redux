import {
    GET_TRAVELS,
    DELETE_TRAVEL,
    ADD_TRAVEL,
    UPDATE_TRAVEL,
    GET_SINGLE_TRAVEL
} from './constants'

const initialState = {
    travels: [],
    travel: {},
    loading: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRAVELS:
            return {
                ...state,
                travels: action.payload,
                loading: false
            }
        case DELETE_TRAVEL:
        case ADD_TRAVEL:
        case UPDATE_TRAVEL:
            return {
                ...state,
                loading: false
            };
        case GET_SINGLE_TRAVEL:
            return {
                ...state,
                travel: action.payload,
                loading: false
            }
        default:
            return state
    }
}
