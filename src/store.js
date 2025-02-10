import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "@reduxjs/toolkit"
import { thunk } from "redux-thunk";
import tweetReducer from "./reducers/tweetReducers";


const rootReducer = combineReducers({
    tweets: tweetReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;