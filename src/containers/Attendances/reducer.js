import {
    ATTENDANCES_REQUEST,
    ATTENDANCES_RESPONSE,
    ATTENDANCES_ERROR
  } from "./action";
  
  const defaultState = {
    attendances: [],
    loading: false
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ATTENDANCES_RESPONSE: {
        return {
          ...state,
          attendances: action.response,
          loading: false
        };
      }
      
      case ATTENDANCES_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
      case ATTENDANCES_ERROR: {
        return {
          ...state,
          error: action.error,
          loading: false
        };
      }
      default: {
        return state;
      }
    }
  }
  