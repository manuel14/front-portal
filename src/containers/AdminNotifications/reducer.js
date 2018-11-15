import {
    ADMIN_NOTIFICATIONS_REQUEST,
    ADMIN_NOTIFICATIONS_RESPONSE,
    ADMIN_NOTIFICATIONS_ERROR,
    ADMIN_NOTIFICATIONS_SUCCESS
  } from "./action";
  
  const defaultState = {
    employees: []
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ADMIN_NOTIFICATIONS_RESPONSE: {
        return {
          ...state,
          employees: action.response.results
        };
      }
      case ADMIN_NOTIFICATIONS_SUCCESS: {
        return {
          ...state,
          employees: []
        };
      }
      
      case ADMIN_NOTIFICATIONS_REQUEST: {
        return {
          ...state
        };
      }
      case ADMIN_NOTIFICATIONS_ERROR: {
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
  