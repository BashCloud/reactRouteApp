import React from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import './style.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    handleLogin = () => {
        this.props.Login()
        console.log("User Logged in...");
    }
    render() {
        if (this.props.authorized) {
            return (<Redirect to='/' />)
        }
        return (
            <div >
                <Card className="card">
                    <CardContent>
                        <h2>Please Login ...</h2>
                        <form onSubmit={this.handleSubmit}>
                        <TextField required type="text" label="Email"
                            onChange={this.emailChange} margin="normal" />
                        <br />
                        <TextField required type="password" label="Password"
                            onChange={this.passwordChange} margin="normal" />
                        <br />
                        <br />
                        <Button variant="contained" color="primary" onClick={this.handleLogin}>
                            Login
                        </Button>
                    </form>
                    </CardContent>
                    <CardActions>

                        
                    </CardActions>
                </Card>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        authorized: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        Login: () => dispatch({
            type: 'LOGIN'
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)