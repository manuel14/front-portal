import {
    VACATION_REQUEST,
    VACATION_RESPONSE,
    VACATION_ERROR
  } from "./action";
  
  const defaultState = {};
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case VACATION_RESPONSE: {
        return {
          ...state,
          vacations: action.response
        };
      }
      
      case VACATION_REQUEST: {
        return {
          ...state
        };
      }
      case VACATION_ERROR: {
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
  