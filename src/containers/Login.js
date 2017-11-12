import React, { Component } from 'react';
import compose from 'recompose/compose';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction } from '../actions/login';

const styles = theme => ({
    root: theme.root,
});


class Login extends Component {
    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.login.isLoggedIn) {
            this.props.history.push('/');
        }
    }
    responseGoogle(response) {
        this.props.loginAction(response.profileObj);
    }
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <Paper>
                    <h1>Please login</h1>
                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Google Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                    />
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: bindActionCreators(loginAction, dispatch),
    }
};

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps), withWidth())(Login);