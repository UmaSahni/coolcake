import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as AuthReducer} from "../Redux/AuthReducer/reducer"
import thunk from "redux-thunk"

import { reducer as ProductReducer } from "./ProductReducer/reducer"
const rootReducer = combineReducers({AuthReducer, ProductReducer})

export const store = legacy_createStore (rootReducer, applyMiddleware(thunk))
