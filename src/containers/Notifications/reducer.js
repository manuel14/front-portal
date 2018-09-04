import {
    NOTIFICATIONS_REQUEST,
    NOTIFICATIONS_RESPONSE,
    NOTIFICATIONS_ERROR
  } from "./action";
  
  const defaultState = {
    notifications: []
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case NOTIFICATIONS_RESPONSE: {
        return {
          ...state,
          notifications: action.response
        };
      }
      
      case NOTIFICATIONS_REQUEST: {
        return {
          ...state
        };
      }
      case NOTIFICATIONS_ERROR: {
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
  