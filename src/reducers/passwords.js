import * as types from '../constants';

const passwordsReducer = (state = [], response) => {
    if (response.type === types.GET_PASSWORDS) {
        return state.concat(response.passwords);
    }
    if (response.type === types.REMOVE_PASSWORD) {
        return [
            ...state.slice(0, Number(response.index)),
            ...state.slice(Number(response.index) + 1),
        ]
    }
    if (response.type === types.ADD_PASSWORD) {
        return [
            ...state,
            response.addNew,
        ]
    }
    if (response.type === types.EDIT_PASSWORD) {
        return [
            ...state.slice(0, Number(response.index)),
            response.editedPass,
            ...state.slice(Number(response.index) + 1),
        ]
    }
    if (response.type === types.RESET_PASSWORDS) {
        return [];
    }
    return state
}

export default passwordsReducer;