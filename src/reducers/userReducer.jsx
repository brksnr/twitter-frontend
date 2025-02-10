import { SET_USER } from "../actions/userAction";


const initialState = {
    user: {
      token: null,
      email: null,
    }
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: {
                    token: action.payload.token,
                    email: action.payload.email,
                },
            };
        default:
            return state;
    }
};


export default userReducer;