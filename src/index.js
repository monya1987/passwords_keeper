import React from 'react';
import ReactDOM from 'react-dom';
import mainReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import compose from 'recompose/compose';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import App from './containers/App';
import './index.css';
import 'normalize.css';

/* redux-devtools enable */
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk, createLogger)));

const outerTheme = createMuiTheme();
const theme = (outerTheme) => {
    return {
        ...outerTheme,
        root: {
            margin: '0 auto',
            maxWidth: '1200px',
            width: '100%',
        },
        overrides: {
            MuiPaper: {
                root: {
                    padding: '5px 20px',
                }
            },
        },
    }
};

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={outerTheme}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
