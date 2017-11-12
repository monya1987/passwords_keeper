import * as types from '../constants';

export const getPasswords = () => {
    return {
        type: types.GET_PASSWORDS,
        passwords: JSON.parse(localStorage.passwords),
    }
};

export const removePassword = (response) => {
    return {
        type: types.REMOVE_PASSWORD,
        index: response,
    }
};

export const addPassword = (name, password) => {
    return {
        type: types.ADD_PASSWORD,
        addNew: {
            name: name,
            password: password,
        },
    }
};

export const editPassword = (name, password, index) => {
    return {
        type: types.EDIT_PASSWORD,
        index: index,
        editedPass: {
            name: name,
            password: password,
        },
    }
};

export const resetPasswords = () => {
    return {
        type: types.RESET_PASSWORDS,
    }
};