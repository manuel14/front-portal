import {
    LOGIN_REQUEST,
    SIGNUP_REQUEST,
    USER_ERROR,
    LOGIN_RESPONSE,
    SIGNUP_RESPONSE,
    USER_LOGOUT,
  } from "./action";
  
  const defaultState = {
    username: ""
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case LOGIN_RESPONSE: {
        localStorage.setItem('jwtToken', action.response.token)
        localStorage.setItem('userid', action.response.userid)
        localStorage.setItem('staff', action.response.staff)
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
      case USER_LOGOUT:{
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('userid')
        localStorage.removeItem('staff')
          return{
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
      default: {
        return state;
      }
    }
  }
  