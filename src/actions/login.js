import * as types from '../constants';

export const loginAction = (response) => {
    localStorage.setItem('email', response.email);
    localStorage.setItem('name', response.name);
    localStorage.setItem('imageUrl', response.imageUrl);
    return {
        type: types.LOGIN_RESOLVE,
        email: response.email,
        name: response.name,
        photo: response.imageUrl,
    }
};

export const logOut = () => {
    localStorage.clear();
    return {
        type: types.LOGOUT_RESOLVE,
    }
};