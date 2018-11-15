import React, { Component } from 'react';
import {Center, InputText, Label, Button } from '../index';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = { username: this.state.username, password: this.state.password }
        this.props.handleSubmit(data);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="LoginForm">
                <form action="post" onSubmit={this.handleSubmit}>
                    <Label margin={'10px 0px 10px 10px'}>
                        Usuario
                        <InputText
                            onChange={this.handleChange}
                            value={this.state.username}
                            margin='0px 0px 0px 10px'
                            name="username"
                        />
                    </Label>
                    <Label margin={'0px 0px 0px 10px'}>
                        Contraseña
                        <InputText
                            value={this.state.password}
                            onChange={this.handleChange}
                            margin={"0px 0px 0px 10px"}
                            type="password"
                            name="password"
                        />
                    </Label>
                    <Center>
                    <Button
                        onClick={this.handleSubmit}
                        margin={'20px auto'}
                        primary>Ingresar
                    </Button>
                    </Center>
                </form>
            </div>
        )
    }
}

export default LoginForm;