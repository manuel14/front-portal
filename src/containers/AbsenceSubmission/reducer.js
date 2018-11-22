import {
    ABSENCE_REQUEST,
    ABSENCE_RESPONSE,
    ABSENCE_ERROR
  } from "./action";
  
  const defaultState = {};
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ABSENCE_RESPONSE: {
        return {
          ...state,
          absence: action.response
        };
      }
      
      case ABSENCE_REQUEST: {
        return {
          ...state
        };
      }
      case ABSENCE_ERROR: {
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
  