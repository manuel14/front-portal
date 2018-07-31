/* import {
    USER_REQUEST,
    USER_RESPONSE,
    USER_ERROR,
    USER_LOGIN,
    USER_LOGOUT,
    USER_SIGNUP
  } from "./action";
  
  const defaultState = {
    username: ""
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case USER_RESPONSE: {
        localStorage.setItem('jwtToken', action.response.token)
        return {
          ...state,
          username: action.response.username
        };
      }
      case USER_LOGOUT:{
          return{
              ...state,
              username: ""
          }
      }
      case USER_REQUEST: {
        return {
          ...state
        };
      }
      default: {
        return state;
      }
    }
  }
   */