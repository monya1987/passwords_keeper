import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { NavLink } from 'react-router-dom';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import { GoogleLogout } from 'react-google-login';

const styles = theme => ({
    root: theme.root,
    toolbar: {
        justifyContent: 'space-between',
    },
    menu: {
        '& a': {
            color: '#fff',
            textDecoration: 'none',
            display: 'inline-block',
            padding: '10px',
            '&:hover': {
                textDecoration: 'underline',
            }
        },
        '& a.active': {
            textDecoration: 'underline',
        },
    },
    logo: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});


class Header extends Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }
    handleLogOut = () => {
        this.props.resetPasswords();
        this.props.logout();
    }

    render() {
        const {classes, login} = this.props;
        return(
            <header className={classes.root}>
                <AppBar position="static" >
                    <Toolbar className={classes.toolbar}>
                        <NavLink className={classes.logo} exact activeClassName="active" to='/'>Passwords Keeper</NavLink>
                            {login.isLoggedIn ?
                                <div className={classes.menu}>
                                    <NavLink activeClassName="active" to='/about'>About</NavLink>
                                    <span onClick={this.handleLogOut}>
                                        <GoogleLogout
                                            buttonText="Logout"
                                            onLogoutSuccess={this.handleLogOut}
                                        >
                                        </GoogleLogout>
                                    </span>
                                </div>
                                :
                                <div className={classes.menu}>
                                    <NavLink activeClassName="active" to='/about'>About</NavLink>
                                    <NavLink activeClassName="active" to='/signin'>Login</NavLink>
                                </div>
                            }
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}

export default compose(withStyles(styles), withWidth())(Header);