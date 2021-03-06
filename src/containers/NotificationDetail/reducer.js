import {
    NOTIFICATION_DETAIL_REQUEST,
    NOTIFICATION_DETAIL_RESPONSE,
    NOTIFICATION_DETAIL_ERROR
  } from "./action";
  
  const defaultState = {
    notification: {}
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case NOTIFICATION_DETAIL_RESPONSE: {
        return {
          ...state,
          notification: action.response,
        };
      }
      
      case NOTIFICATION_DETAIL_REQUEST: {
        return {
          ...state
        };
      }
      case NOTIFICATION_DETAIL_ERROR: {
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
  