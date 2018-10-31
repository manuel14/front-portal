import {
    ADMIN_EVENT_REQUEST,
    ADMIN_EVENT_RESPONSE,
    ADMIN_EVENT_ERROR
  } from "./action";
  
  const defaultState = {
    event: {},
    loading: false
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ADMIN_EVENT_RESPONSE: {
        return {
          ...state,
          event: action.response,
          loading:false
        };
      }
      case ADMIN_EVENT_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
      case ADMIN_EVENT_ERROR: {
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
  