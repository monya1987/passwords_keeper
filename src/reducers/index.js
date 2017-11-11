import { combineReducers } from 'redux';
import loginReducer from './login';
import passwordsReducer from './passwords'

const mainReducer = combineReducers({
    loginReducer,
    passwordsReducer,
});

export default mainReducer;
