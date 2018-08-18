import { post, get } from "../../api";

export const LOGIN_REQUEST = "prode/user/USER_REQUEST";
export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export const LOGIN_RESPONSE = "prode/user/LOGIN_RESPONSE";
export function loginResponse(response) {
  return {
    type: LOGIN_RESPONSE,
    response
  };
}

export const SIGNUP_REQUEST = "prode/user/SIGNUP_REQUEST";
export function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  };
}

export const SIGNUP_RESPONSE = "prode/user/SIGNUP_RESPONSE";
export function signupResponse(response) {
  return {
    type: SIGNUP_RESPONSE,
    response
  };
}
export const USER_ERROR = "prode/user/USER_ERROR";
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
    return post( `/api/auth/users/create/`, user_creds)
      .then(res => {
        signupResponse(res)
      })
      .catch(err => userError(err));
  }

}

export function loginUser(user_creds) {
    return dispatch => {
      dispatch(loginRequest())
      return post( `/api/auth/jwt/create/`, user_creds)
        .then(res => 
          dispatch(loginResponse(res))
        )
        .catch(err => userError(err));
    }
}

export const USER_LOGOUT = "prode/user/USER_LOGOUT";
export function logoutUser() {
  localStorage.removeItem("staff");
  localStorage.removeItem("username");
  localStorage.removeItem("jwtToken");
  return {
    type: USER_LOGOUT
  };
}