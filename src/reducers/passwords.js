import * as types from '../constants';


export default (state = [], action) => {
    switch (action.type) {
        case types.GET_PASSWORDS:
            return state.concat(action.passwords);
        case types.REMOVE_PASSWORD:
            return [
                ...state.slice(0, Number(action.index)),
                ...state.slice(Number(action.index) + 1),
            ];
        case types.ADD_PASSWORD:
            return [
                ...state,
                action.addNew,
            ];
        case types.EDIT_PASSWORD:
            return [
                ...state.slice(0, Number(action.index)),
                action.editedPass,
                ...state.slice(Number(action.index) + 1),
            ];
        case types.RESET_PASSWORDS:
            return [];
        default:
            return state;
    }
}