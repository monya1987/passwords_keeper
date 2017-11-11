import * as types from '../constants';

export const getPasswords = (response) => {
    return {
        type: types.GET_PASSWORDS,
        passwords: JSON.parse(response),
    }
};

export const removePassword = (response) => {
    return {
        type: types.REMOVE_PASSWORD,
        index: response,
    }
};

export const addPassword = (name, password) => {
    let addNew = {
        name: name,
        password: password,
    };
    return {
        type: types.ADD_PASSWORD,
        addNew: addNew,
    }
};

export const editPassword = (name, password, index) => {
    let editedPass = {
        name: name,
        password: password,
    };
    return {
        type: types.EDIT_PASSWORD,
        index: index,
        editedPass: editedPass,
    }
};

export const resetPasswords = () => {
    return {
        type: types.RESET_PASSWORDS,
    }
};