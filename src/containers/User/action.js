import { post, get } from "../../api";

export const USER_REQUEST = "prode/user/USER_REQUEST";
export function userRequest() {
  return {
    type: USER_REQUEST
  };
}

export const USER_RESPONSE = "prode/user/USER_RESPONSE";
export function userResponse(response) {
  return {
    type: USER_RESPONSE,
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
    dispatch(userRequest())
    return post( `/auth/signup/`, user_creds)
      .then(res => {
        userResponse(res)
      })
      .catch(err => userError(err));
  }

}

export function loginUser(user_creds) {
    return dispatch => {
      dispatch(userRequest())
      return post( `/auth/login/`, user_creds)
        .then(res => 
          dispatch(userResponse(res))
        )
        .catch(err => userError(err));
    }
  }

/* export function logoutUser() {
  return dispatch => {
    dispatch(userRequest())
    return post(`/api/user/logout`)
        .then(res => userLogout(res))
        .catch(err => userError(err));
  }
} */