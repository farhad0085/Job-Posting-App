import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk'

let composers = [applyMiddleware(thunk)]

const store = createStore(
    rootReducer,
    compose(
        ...composers
    )
)

export default store