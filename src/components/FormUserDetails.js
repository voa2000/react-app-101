import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Enter User Details" />
                    <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <Button
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles ={
    button: {
        margin: 15
    }
}

export default FormUserDetails
