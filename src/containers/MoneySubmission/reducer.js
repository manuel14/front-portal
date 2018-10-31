import {
    MONEY_REQUEST,
    MONEY_RESPONSE,
    MONEY_ERROR
  } from "./action";
  
  const defaultState = {};
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case MONEY_RESPONSE: {
        return {
          ...state,
          attendances: action.response
        };
      }
      
      case MONEY_REQUEST: {
        return {
          ...state
        };
      }
      case MONEY_ERROR: {
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
  