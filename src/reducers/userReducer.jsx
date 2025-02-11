import { SET_USER } from "../actions/userAction";


const initialState = {
    user: {
      token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
      email: localStorage.getItem('email') ? localStorage.getItem('email') : null,
      id: localStorage.getItem('id') ? localStorage.getItem('id') : null,
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
                    id: action.payload.id
                },
            };
        default:
            return state;
    }
};

export default userReducer;
