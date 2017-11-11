import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

export default class FormDialog extends React.Component {
    state = {
        open: this.props.open,
        passlabel: '',
        password: '',
        error: false,
        mode: 'add',
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleRequestClose = () => {
        this.setState({
            passlabel: '',
            password: '',
        });
        this.props.closeModal();
    };
    handleRequestSave = () => {
        if (this.state.passlabel && this.state.password) {
            if (this.state.mode === 'add') {
                this.props.addPassword(this.state.passlabel, this.state.password);
            } else {
                this.props.editPassword(this.state.passlabel, this.state.password, this.state.editIndex);
            }
            this.setState({
                passlabel: '',
                password: '',
            });
            this.props.closeModal();
        } else {
            this.setState({ error: 'Fields Must be filled =)))' });
        }
    };

    componentWillReceiveProps(nextProps) {
        let a = {}
        let combineNewState = {
            open: nextProps.open,
            mode: nextProps.mode,
            editIndex: nextProps.editIndex,
        };
        if (nextProps.editIndex !== false) {
            a = {
                passlabel: nextProps.passwords[nextProps.editIndex].name,
                password: nextProps.passwords[nextProps.editIndex].password,
            };
        }
        this.setState(Object.assign({}, combineNewState, a));
    };

    render() {
        const {open, mode, error, password, passlabel} = this.state;
        return (
            <div>
                <Dialog open={open} onRequestClose={this.handleRequestClose}>
                    <DialogTitle>{mode === 'add' ? 'Add new ' : 'Edit '} password</DialogTitle>
                    {error ? <small style={{textAlign: 'center', color: 'red'}}>{error}</small> : null}
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="passlabel"
                            label="Password Label"
                            value={passlabel}
                            type="text"
                            autoComplete={'off'}
                            onChange={this.handleChange('passlabel')}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="pass"
                            value={password}
                            autoComplete={'off'}
                            label="Password"
                            type="password"
                            onChange={this.handleChange('password')}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleRequestSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}