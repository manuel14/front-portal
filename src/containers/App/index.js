import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Button, InputText, Label, Nav, Select, SideBar, AdminIndex} from '../../components';
import { Box, Flex } from 'grid-styled';
import { getTheme } from '../../utils/theme';
import { signUpUser, loginUser, logoutUser } from './action';
import Receipts from '../Receipts';
import ReceiptDetail from '../ReceiptDetail';
import Admin from '../Admin';
import AdminNotifications from '../AdminNotifications';
import './styles.css';
import 'react-select/dist/react-select.css';
import Notifications from 'react-notification-system-redux';


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


  render() {
    const token = localStorage.jwtToken;
    const staff = localStorage.staff;
    const { username } = this.props;
    const style = {
      NotificationItem: { // Override the notification item
        DefaultStyle: { // Applied to every notification, regardless of the notification level
          margin: '10px 5px 2px 1px'
        },

        success: { // Applied only to the success notification item
          color: 'green'
        }
      }
    };
    return (
      <BrowserRouter>
        <ThemeProvider theme={getTheme(this.props.theme)}>
          <div className="App">
          <Notifications
              notifications={this.props.notifications}
              style={style}
              noAnimation={true}
            />
            <div className="App-header">
              <Nav
                compact={false}
                title={'Empleados'}
                onBack={this.onBack}
                onMenu={this.onToggleMenu}
                handleLogout={this.handleLogout}
                userName={username}
                staff={staff}
              />
            </div>
            {
              token && <div className="App-employeesBar">
                <SideBar
                  links={["/recibos", "/notificaciones", "/calendario"]}
                />
              </div>
            }
            <div className="App-content">
              <Switch>
                <Route path="/login"
                  render={() => (token ?
                    (
                      <Redirect to="/recibos" />
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
                <Route onEnter={this.requireAuth} path="/recibos"
                  render={() => (
                    token ? (
                      <Receipts />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route onEnter={this.requireAuth} path="/admin/recibos"
                  render={() => (
                    token ? (
                      <Admin />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                 <Route onEnter={this.requireAuth} path="/admin/notificaciones"
                  render={() => (
                    token ? (
                      <AdminNotifications />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                 <Route onEnter={this.requireAuth} path="/admin"
                  render={() => (
                    token ? (
                      <AdminIndex />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route onEnter={this.requireAuth} path="/recibo/:receiptId"
                  component={ReceiptDetail}
                />
                <Route onEnter={this.requireAuth} exact path='/' render={() => (
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
  notifications: state.notifications
});

const mapDispatchToProps = dispatch => ({
  onSignUp: (user_creds) => dispatch(signUpUser(user_creds)),
  onLogin: (user_creds) => dispatch(loginUser(user_creds)),
  handleLogout: () => dispatch(logoutUser()),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
