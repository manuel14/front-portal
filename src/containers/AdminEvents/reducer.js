import {
    ADMIN_EVENTS_REQUEST,
    ADMIN_EVENTS_RESPONSE,
    ADMIN_EVENTS_ERROR
  } from "./action";
  
  const defaultState = {
    events: [],
    loading: false
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ADMIN_EVENTS_RESPONSE: {
        return {
          ...state,
          events: action.response,
          loading:false
        };
      }
      case ADMIN_EVENTS_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
      case ADMIN_EVENTS_ERROR: {
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
  