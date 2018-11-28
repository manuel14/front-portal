import {
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  USER_ERROR,
  LOGIN_RESPONSE,
  SIGNUP_RESPONSE,
  USER_LOGOUT,
} from "./action";

import {push} from 'react-router-redux';

const defaultState = {
  username: localStorage.getItem('username') ? localStorage.username : "",
  token: localStorage.getItem('jwtToken') ? true: false
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case LOGIN_RESPONSE: {
      localStorage.setItem('jwtToken', action.response.token);
      localStorage.setItem('username', action.response.username);
      localStorage.setItem('staff', action.response.staff);
      localStorage.setItem('id', action.response.id);
      localStorage.setItem('legajo', action.response.legajo);
      localStorage.setItem('user', action.response.user);
      return {
        ...state,
        username: action.response.username,
        token: true
      };
    }
    case SIGNUP_RESPONSE: {
      return {
        ...state
      };
    }
    case USER_LOGOUT: {
      localStorage.clear();
      push('/login');
      return {
        ...state,
        username: "",
        token: false
      }
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        token: false
      };
    }
    case SIGNUP_REQUEST: {
      return {
        ...state
      };
    }
    case USER_ERROR: {
      return {
        ...state,
        error:action.error,
        token: false
      };
    }
    default: {
      return state;
    }
  }
}
