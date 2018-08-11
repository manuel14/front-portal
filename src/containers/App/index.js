import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Button, InputText, Label, Nav, Select, SideBar } from '../../components';
import { Box, Flex } from 'grid-styled';
import { getTheme } from '../../utils/theme';
import { signUpUser, loginUser, logoutUser } from './action';
import Receipts from '../Receipt';
import {Receipt} from '../../components/index';
import './styles.css';
import 'react-select/dist/react-select.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    }
    this.requireAuth = this.requireAuth.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  onBack() {
    return window.history.back();
  };

  onToggleMenu() {
    this.setState(prevState => {
      return { displayMenu: !prevState.displayMenu };
    });
  };

  requireAuth(nextState, replace) {
    if (!localStorage.jwt) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  handleLogin() {
    let username = document.querySelector("input[name='username']").value;
    let password = document.querySelector("input[name='password']").value;
    let user_creds = { username: username, password: password };
    this.props.onLogin(user_creds);
  }

  handleLogout() {
    this.props.handleLogout();
  }
  handleSignUp() {
    let username = document.querySelector("input[name='username']").value;
    let password = document.querySelector("input[name='password']").value;
    let user_creds = { username: username, password: password };
    this.props.onSignUp(user_creds);
  }

  handleSubmit(event) {
    const name = event.target.username;
    const password = event.target.password;
    event.preventDefault();
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  }

  render() {
    const token = localStorage.jwtToken;
    const staff = localStorage.staff;
    console.log(staff);
    const { username } = this.props;
    return (
      <BrowserRouter>
        <ThemeProvider theme={getTheme(this.props.theme)}>
          <div className="App">
            <div className="App-header">
              <Nav
                compact={false}
                title={'Empleados'}
                onBack={this.onBack}
                onMenu={this.onToggleMenu}
                handleLogout={this.handleLogout}
                userName={username}
              />
            </div>
            {
              token && <div className="App-employeesBar">
                <SideBar
                  links={["/recibos", "/notificaciones", "/calendario"]}
                />
              </div>
            }
            {
              staff && <div className="App-adminsBar">
                <SideBar
                  links={["/ladero1", "/ladero2", "/ladero3"]}
                />
              </div>
            }
            <div className="App-content">
              <Switch>
                <Route path="/login"
                  render={() => (token ?
                    (
                      <h1>Logueado</h1>
                    )
                    : (
                      <Flex align="center">
                        <Box mt={100} mx='auto' width={512}>
                          <div className="LoginForm">
                            <form onSubmit={this.handleSubmit}>
                              <Label>
                                Usuario
                                <InputText margin='0px 0px 0px 10px' name="username" />
                              </Label>
                              <Label>
                                Contraseña
                                <InputText margin={"0px 0px 0px 10px"} type="password" name="password" />
                              </Label>
                              <Box>
                                <Button onClick={this.handleLogin} margin={'0px 5px 0px 0px'} center primary>Login</Button>
                                <Button onClick={this.handleSignUp} center success>SignUp</Button>
                                {/* <Select 
                                name="empresasSelect"
                                value={this.state.selectedOption}
                                onChange={this.handleChange}
                                autoFocus
                                placeholder="Elija empresa"
                                options={[
                                    {value: 'uv', label: 'Ushuaiavisión'},
                                    {value: 'tvf', label: 'Tvfuego'}
                                ]}
                              
                              /> */}


                              </Box>
                            </form>
                          </div>
                        </Box>
                      </Flex>
                    )
                  )}

                />

                <Route path="/user"
                  render={() => (
                    token ? (
                      <h1>Logueado </h1>
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/recibos"
                  render={() => (
                    token ? (
                      <Receipts />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/recibo/:receiptId?" component={Receipt}>
                </Route>
                <Route exact path='/' render={() => (
                  token ? (
                    <Redirect to="/recibos" />)
                    : (
                      <Redirect to="/login" />
                    )
                )} />
                <Route
                  path="/404"
                  render={() => <Box p={16}>La página a la que intenta acceder no existe
                  </Box>}
                />
                <Redirect to={'/404'} />
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  ...state.appReducer,
});

const mapDispatchToProps = dispatch => ({
  onSignUp: (user_creds) => dispatch(signUpUser(user_creds)),
  onLogin: (user_creds) => dispatch(loginUser(user_creds)),
  handleLogout: () => dispatch(logoutUser()),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
