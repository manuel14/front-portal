import {
    NOTIFICATIONS_REQUEST,
    NOTIFICATIONS_RESPONSE,
    NOTIFICATIONS_ERROR
  } from "./action";
  
  const defaultState = {
    notifications: [],
    loading: false
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case NOTIFICATIONS_RESPONSE: {
        return {
          ...state,
          notifications: action.response,
          loading: false
        };
      }
      
      case NOTIFICATIONS_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
      case NOTIFICATIONS_ERROR: {
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
  