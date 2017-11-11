import React, { Component } from 'react';
import compose from 'recompose/compose';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

const styles = theme => ({
    root: theme.root,
    paper: {
        padding: '5px 20px',
    }
});

class About extends Component {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <h1>You need to complete the following test task:</h1>
                    <p>Create "Password manager" app, push it to your own github repository and send me or Yuri link to this repository.</p>
                    <p>App should have at least 3 pages: login, register, dashboard (main logged in view).</p>
                    <p>User should be able to add/edit/delete/reveal password on the dashboard after login.</p>
                    <p>All password data should be stored some where, so when user reloads pages, he'll be redirected back to the dashboard and all password will be fetched.</p>
                    <p>You can choose any DB.</p>
                    <p>By default passwords should be hidden with "*", when user clicks the password field it reveals the real password.</p>
                    <p><strong>Stack to use:</strong></p>
                    <ol>
                        <li>React</li>
                        <li>Redux</li>
                    </ol>
                </Paper>
            </div>
        )
    }
}
export default compose(withStyles(styles), withWidth())(About);