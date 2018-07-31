import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex, Box } from 'grid-styled';
import { get } from 'lodash';
import {Label, Button, InputText, Toast} from '../../components/index';
import {loginUser, signUpUser} from './action';


const STORE_ADMIN_ROLE = 'Customer Portal Store User';
const GENERAL_ROLE = 'Customer Portal';




class User extends Component {

  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      session: !!localStorage.jwtToken
    }
  }

  handleLogin(){
    let username = document.querySelector("input[name='username']").value;
    let password = document.querySelector("input[name='password']").value;
    let user_creds = {username: username, password: password};
    this.props.onLogin(user_creds);


  }
  handleSignUp(){
    let username = document.querySelector("input[name='username']").value;
    let password = document.querySelector("input[name='password']").value;
    let user_creds = {username: username, password: password};
    this.props.onSignUp(user_creds);


  }

  handleSubmit(event){
    console.log(event.target);
    const name = event.target.username;
    const password = event.target.password;
    console.log(name.value);
    console.log(password.value);
    
    event.preventDefault();


  }

  render() {
    const {username} = this.props;
    return username ?(
      <Toast visible={true}>
        <h1>Login succesfull</h1>
      </Toast>
    ): (
      <Flex align="center">
      <Box mt={100} mx={600} width={512}>
      <div>
        <form onSubmit={this.handleSubmit}>
          <Label>  
            <InputText  margin={"5px"} name="username"/>

            Usuario
          </Label>
          <Label>
            <InputText margin={"5px"} type="password" name="password"/>
            Contraseña
          </Label>
          <Button onClick={this.handleLogin} margin={'0px 5px 0px 0px'} center primary>Login</Button>
          <Button onClick={this.handleSignUp} center success>SignUp</Button>
        </form>

      </div>
      </Box>
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  ...state.userReducer
});

const mapDispatchToProps = dispatch => ({
  onSignUp: (user_creds) => dispatch(signUpUser(user_creds)),
  onLogin: (user_creds) => dispatch(loginUser(user_creds)),
  dispatch,
  
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
