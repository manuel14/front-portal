import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Nav, SideBar, SubmissionIndex, AdminIndex, LoginForm } from '../../components';
import { Box, Flex } from 'grid-styled';
import { getTheme } from '../../utils/theme';
import { loginUser, logoutUser } from './action';
import Receipts from '../Receipts';
import ReceiptDetail from '../ReceiptDetail';
import Notification from '../Notifications';
import NotificationDetail from '../NotificationDetail';
import Admin from '../Admin';
import AdminEvents from '../AdminEvents';
import AdminEventDetail from '../AdminEventDetail';
import AdminNotifications from '../AdminNotifications';
import AdminReceipts from '../AdminReceipts';
import AbsenceSubmission from '../AbsenceSubmission';
import MoneySubmission from '../MoneySubmission';
import AdminSubmissions from '../AdminSubmission';
import AdminSubmissionsDetail from '../AdminSubmissionDetail';
import VacationsSubmission from '../VacationsSubmissions';
import Attendances from '../Attendances'
import AttendanceDetail from '../AttendanceDetail';
import Events from '../Events';
import './styles.css';
import Notifications from 'react-notification-system-redux';
import Submissions from '../Submissions';
import User from '../User';
import * as Sentry from '@sentry/browser';
Sentry.init({ dsn: process.env.REACT_APP_SENTRY_URL });


class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  onBack() {
    return window.history.back();
  };

  onAdmin = () => {
    return window.history.go('/admin');
  }
  
  handleLogin(data) {
    this.props.onLogin(data);
  }

  handleLogout() {
    this.props.handleLogout();
  }

  render() {;
    const staff = localStorage.staff;
    const { username, token } = this.props;
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
                handleLogout={this.handleLogout}
                username={username}
                staff={staff}
                onAdmin={this.onAdmin}
              />
            </div>
            {
              token && <div className="App-employeesBar">
                <SideBar
                  links={["/recibos", "/notificaciones", "/eventos", "/fichadas", "/solicitudes"]}
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
                        <Box mt={100} mx="auto" width={512}>
                          <LoginForm
                            handleSubmit={this.handleLogin}
                          >
                          </LoginForm>
                        </Box>
                      </Flex>
                    )
                  )}
                />
                <Route path="/user"
                  render={() => (
                    token ? (
                      <User />
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
                <Route path="/recibo/:receiptId"
                  render={() => (
                    token ? (
                      <ReceiptDetail />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/admin/recibos/nuevos"
                  render={() => (
                    token ? (
                      <Admin/>
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/admin/recibos"
                  render={() => (
                    token ? (
                      <AdminReceipts />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/admin/solicitudes/:submissionId/:tipo"
                  render={() => (
                    token ? (
                      <AdminSubmissionsDetail />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/admin/solicitudes"
                  render={() => (
                    token ? (
                      <AdminSubmissions />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/admin/notificaciones"
                  render={() => (
                    token ? (
                      <AdminNotifications />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/admin/eventos/:eventId"
                  render={() => (
                    token ? (
                      <AdminEventDetail />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/admin/eventos"
                  render={() => (
                    token ? (
                      <AdminEvents />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/admin"
                  render={() => (
                    token ? (
                      <AdminIndex username={username} />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )} />
                <Route path="/notificaciones"
                  render={() => (
                    token ? (
                      <Notification />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )}
                />
                <Route path="/eventos"
                  render={() => (
                    token ? (
                      <Events />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )}
                />
                <Route path="/solicitudes/adelanto"
                  render={() => (
                    token ? (
                      <MoneySubmission />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )}
                />
                <Route path="/solicitudes/ausencia"
                  render={() => (
                    token ? (
                      <AbsenceSubmission />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )}
                />
                <Route path="/solicitudes/mis"
                  render={() => (
                    token ? (
                      <Submissions />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )}
                />
                <Route path="/solicitudes/vacaciones"
                  render={() => (
                    token ? (
                      <VacationsSubmission />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )}
                />
                <Route path="/solicitudes"
                  render={() => (
                    token ? (
                      <SubmissionIndex />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )}
                />
                <Route path="/fichadas"
                  render={() => (
                    token ? (
                      <Attendances />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )}
                />
                <Route path="/fichada/:attendanceId"
                  render={() => (
                    token ? (
                      <AttendanceDetail />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )}
                />
                <Route path="/notificacion/:notificationId"
                  render={() => (
                    token ? (
                      <NotificationDetail />
                    )
                      : (
                        <Redirect to="/login" />
                      )
                  )}
                />
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
  notifications: state.notifications
});

const mapDispatchToProps = dispatch => ({
  onLogin: (user_creds) => dispatch(loginUser(user_creds)),
  handleLogout: () => dispatch(logoutUser()),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
