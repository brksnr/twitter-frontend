import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "@reduxjs/toolkit"
import { thunk } from "redux-thunk";
import tweetReducer from "./reducers/tweetReducers";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    tweets: tweetReducer,
    user : userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;