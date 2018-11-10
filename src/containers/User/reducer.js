import {
    USER_REQUEST,
    USER_RESPONSE,
    USER_ERROR
  } from "./action";
  
  const defaultState = {};
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case USER_RESPONSE: {
        return {
          ...state,
          employee: action.response
        };
      }
      case USER_ERROR:{
          return{
              ...state,
              error: action.error
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