import {
    NOTIFICATION_REQUEST,
    NOTIFICATION_RESPONSE,
    NOTIFICATION_ERROR
  } from "./action";
  
  const defaultState = {
    notification: {}
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case NOTIFICATION_RESPONSE: {
        return {
          ...state,
          notification: action.response,
        };
      }
      
      case NOTIFICATION_REQUEST: {
        return {
          ...state
        };
      }
      case NOTIFICATION_ERROR: {
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
  