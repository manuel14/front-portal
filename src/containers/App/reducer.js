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
  username: ""
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case LOGIN_RESPONSE: {
      localStorage.setItem('jwtToken', action.response.token)
      localStorage.setItem('username', action.response.username)
      localStorage.setItem('staff', action.response.staff)
      localStorage.setItem('id', action.response.id)
      localStorage.setItem('legajo', action.response.legajo)
      return {
        ...state,
        username: action.response.username
      };
    }
    case SIGNUP_RESPONSE: {
      return {
        ...state
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('username');
      localStorage.removeItem('staff');
      localStorage.removeItem('id');
      localStorage.removeItem('legajo');
      push('/login')
      return {
        ...state,
        username: ""
      }
    }
    case LOGIN_REQUEST: {
      return {
        ...state
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
        error:action.error
      };
    }
    default: {
      return state;
    }
  }
}
