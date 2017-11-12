import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { loginAction, logOut } from '../actions/login';
import { resetPasswords } from '../actions/passwords';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import Login from './Login';
import Header from '../components/Header';
import About from '../components/About';





class App extends Component {
    componentWillMount() {
        if (localStorage.email) {
            this.props.loginAction(localStorage);
        }
    };
    render() {
        const {login, logOut, resetPasswords} = this.props;
        return (
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
        );
    };
}

// TODO Proptypes


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
