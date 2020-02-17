import { createStore, applyMiddleware } from "redux"
import reducer from "../Reducer"
import thunk from 'redux-thunk'

export const store = createStore(reducer,applyMiddleware(thunk)) 