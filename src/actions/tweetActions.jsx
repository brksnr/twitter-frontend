
export const GET_TWEETS = 'GET_TWEETS';





export const getTweets = (tweets) => {
    return {
        type: GET_TWEETS,
        payload : tweets
    }
}