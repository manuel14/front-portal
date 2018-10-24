import { post } from "../../api";
import {error} from 'react-notification-system-redux';

export const LOGIN_REQUEST = "portal/user/USER_REQUEST";
export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export const LOGIN_RESPONSE = "portal/user/LOGIN_RESPONSE";
export function loginResponse(response) {
  return {
    type: LOGIN_RESPONSE,
    response
  };
}

export const SIGNUP_REQUEST = "portal/user/SIGNUP_REQUEST";
export function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  };
}

export const SIGNUP_RESPONSE = "portal/user/SIGNUP_RESPONSE";
export function signupResponse(response) {
  return {
    type: SIGNUP_RESPONSE,
    response
  };
}
export const USER_ERROR = "portal/user/USER_ERROR";
export function userError(error) {
  return {
    type: USER_ERROR,
    error
  };
}

export function signUpUser(user_creds)
{
  return dispatch => {
    dispatch(signupRequest())
    return post( `/api/auth/`, user_creds)
      .then(res => {
        signupResponse(res)
      })
      .catch(err => userError(err));
  }

}

export function loginUser(user_creds) {
    return dispatch => {
      dispatch(loginRequest())
      return post( `/api/auth/`, user_creds)
        .then(res => 
          dispatch(loginResponse(res))
        )
        .catch(err => {
          if ((err.status === 401)|| (err.status===400)){
            const error401 = {
              // uid: 'once-please', // you can specify your own uid if required
              title: 'Error',
              message: 'El usuario y/o la contraseña ingresada no son correctos',
              position: 'tr',
              autoDismiss: 0
            };
            dispatch(error(error401))
          }
          dispatch(userError(err))});
    }
}

export const USER_LOGOUT = "portal/user/USER_LOGOUT";
export function logoutUser() {
  return {
    type: USER_LOGOUT
  };
}