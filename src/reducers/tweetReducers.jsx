import { GET_TWEETS } from "../actions/tweetActions"


const initialState = {
    tweets: []
}


const tweetReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TWEETS:
            return {...state, tweets: action.payload}
            default:
                return state
    }
}


export default tweetReducer;