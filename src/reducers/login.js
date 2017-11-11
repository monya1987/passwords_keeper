import * as types from '../constants';

const initialState = {
    isLoggedIn: false,
    email: false,
    name: false,
    photo: false,
};

const loginReducer = (state = initialState, response) => {
    if (response.type === types.LOGIN_RESOLVE) {
        return Object.assign({}, state, {
            isLoggedIn: true,
            email: response.email,
            name: response.name,
            photo: response.photo,
        })
    }
    if (response.type === types.LOGOUT_RESOLVE) {
        return Object.assign({}, state, initialState)
    }
    return state
}

export default loginReducer