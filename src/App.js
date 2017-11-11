import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import About from './components/About';
import { loginAction, logOut } from './actions/login';
import { resetPasswords } from './actions/passwords';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import 'normalize.css';

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

const outerTheme = createMuiTheme();

class App extends Component {

    componentWillMount() {
        if (localStorage.email !== undefined) {
            this.props.loginAction(localStorage);
        }
    };
    render() {
        const {store, login, logOut, resetPasswords} = this.props;
        return (
        <Provider store={store}>
          <MuiThemeProvider theme={outerTheme}>
            <MuiThemeProvider theme={theme}>
              <BrowserRouter>
                <div>
                  <Header login={login} logout={logOut} resetPasswords={resetPasswords} />
                  <Switch>
                      <Route exact path='/' component={Dashboard} />
                      <Route path='/signin' component={Login} />
                      <Route path='/about' component={About} />
                  </Switch>
                </div>
              </BrowserRouter>
            </MuiThemeProvider>
          </MuiThemeProvider>
        </Provider>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: bindActionCreators(loginAction, dispatch),
        logOut: bindActionCreators(logOut, dispatch),
        resetPasswords: bindActionCreators(resetPasswords, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
