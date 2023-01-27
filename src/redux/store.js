import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    usersReducer
} from './reducers'

const reducers = combineReducers({
    data: usersReducer
})

const middleware = [thunk]

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store