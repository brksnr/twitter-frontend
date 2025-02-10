export const SET_USER = "SET_USER";



export const setUser = (email, token, id) => {
    return {
        type: SET_USER,
        payload: { email, token, id }
    };
};