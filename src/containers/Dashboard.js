import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import UserBox from '../components/UserBox';
import { bindActionCreators } from 'redux';
import { getPasswords, removePassword, addPassword, editPassword } from '../actions/passwords';

import FormDialog from '../components/Dialog';

const styles = theme => ({
    root: theme.root,
    dashboardHead: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        paddingBottom: '10px',
        borderBottom: '2px solid #ccc',
        '& > button': {
            marginTop: '12px'
        },
    },
    passHolder: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        marginBottom: '15px',
        borderBottom: '2px solid #eee',
        '& > .material-icons': {
            border: 'none',
            background: 'none',
            padding: '3px',
            borderRadius: '100px',
            marginLeft: '6px',
            cursor: 'pointer',
        }
    },
    passName: {
        margin: '0 15px 0 0',
        maxWidth: '200px',
        minWidth: '200px',
    },
    passInput: {
        cursor: 'pointer',
        padding: '2px 5px',
    },
});



class Dashboard extends Component {
    state = {
        open: false,
        mode: 'add',
        editIndex: false,
    };
    constructor(props) {
        super(props);
        this.addNewPassword = this.addNewPassword.bind(this);
        this.editPassword = this.editPassword.bind(this);
        this.removePassword = this.removePassword.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentWillMount() {
        if (localStorage.passwords) {
            this.props.getPasswords();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.login.isLoggedIn) {
            localStorage.setItem('passwords', JSON.stringify(nextProps.passwords));
        }
    }
    addNewPassword() {
        this.setState({ mode: 'add', open: true, editIndex: false });
    }
    closeModal() {
        this.setState({ open: false });
    }
    removePassword(event) {
        this.props.removePassword(event.target.parentNode.dataset.index);
    }
    editPassword(event) {
        this.setState({ mode: 'edit', open: true, editIndex: event.target.parentNode.dataset.index});
    }
    showPassword(event) {
        let target = event.target;
        target.getAttribute('type') === 'text' ? target.setAttribute('type', 'password') : target.setAttribute('type', 'text');
    }
    renderPasswords(passwords) {
        return (
            passwords.map((item, index) => {
                const { name, password } = item;
                const { passHolder, passName, passInput } = this.props.classes;
                return (
                    <div key={index} data-index={index} className={passHolder}>
                        <p className={passName}>{name}</p>
                        <input
                            value={password}
                            readOnly
                            type="password"
                            className={passInput}
                            onClick={this.showPassword}
                        />
                        <Icon onClick={this.editPassword} color="primary">mode_edit</Icon>
                        <Icon onClick={this.removePassword} color="error">delete</Icon>
                    </div>
                )
            })
        )
    }
    render() {
        const {login, passwords, addPassword, editPassword} = this.props;
        const {open, editIndex, mode} = this.state;
        const {root, dashboardHead } = this.props.classes;
        return(
            <div className={root}>
                <Paper>
                    {login.isLoggedIn ?
                        <Grid container>
                        <Grid item xs={8}>
                            <div className={dashboardHead}>
                                <h1>Dashboard</h1>
                                <Button onClick={this.addNewPassword} fab color="primary" aria-label="add">
                                    <AddIcon />
                                </Button>
                            </div>
                            {this.renderPasswords(passwords)}
                        </Grid>
                        <Grid item xs={4}><UserBox user={login}/></Grid>
                    </Grid>

                    : <h1>Dashboard</h1>}
                </Paper>

                <FormDialog
                    open={open}
                    editIndex={editIndex}
                    addPassword={addPassword}
                    editPassword={editPassword}
                    closeModal={this.closeModal}
                    mode={mode}
                    passwords={passwords}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer,
        passwords: state.passwordsReducer,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getPasswords: bindActionCreators(getPasswords, dispatch),
        removePassword: bindActionCreators(removePassword, dispatch),
        addPassword: bindActionCreators(addPassword, dispatch),
        editPassword: bindActionCreators(editPassword, dispatch),
    }
};

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps), withWidth())(Dashboard);