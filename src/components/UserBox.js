import React, { Component } from 'react';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: theme.root,
    userBox: {
        paddingLeft: '15px',
        marginLeft: '15px',
        borderLeft: '2px solid #ccc',
    },
    userEmail: {

    },
});

class UserBox extends Component {
    render() {
        const {classes, user} = this.props;
        return(
                <div className={classes.userBox}>
                    <h2>{user.name}</h2>
                    <img src={user.photo} alt=""/>
                    <p className={classes.userEmail}>{user.email}</p>
                </div>
        )
    }
}

export default compose(withStyles(styles), withWidth())(UserBox);