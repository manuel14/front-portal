import {
    ATTENDANCES_REQUEST,
    ATTENDANCES_RESPONSE,
    ATTENDANCES_ERROR
  } from "./action";
  
  const defaultState = {
    attendances: []
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ATTENDANCES_RESPONSE: {
        return {
          ...state,
          attendances: action.response
        };
      }
      
      case ATTENDANCES_REQUEST: {
        return {
          ...state
        };
      }
      case ATTENDANCES_ERROR: {
        return {
          ...state,
          error: action.error
        };
      }
      default: {
        return state;
      }
    }
  }
  