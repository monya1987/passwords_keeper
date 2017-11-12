import * as types from '../constants';

const initialState = {
    isLoggedIn: false,
    email: false,
    name: false,
    photo: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_RESOLVE:
            return {
                ...state,
                isLoggedIn: true,
                email: action.email,
                name: action.name,
                photo: action.photo,
            };
        case types.LOGOUT_RESOLVE:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}