import {
    ADMIN_EVENT_DETAIL_REQUEST,
    ADMIN_EVENT_DETAIL_RESPONSE,
    ADMIN_EVENT_DETAIL_ERROR
  } from "./action";
  
  const defaultState = {
    event: {},
    loading: false
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ADMIN_EVENT_DETAIL_RESPONSE: {
        return {
          ...state,
          event: action.response,
          loading:false
        };
      }
      case ADMIN_EVENT_DETAIL_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
      case ADMIN_EVENT_DETAIL_ERROR: {
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
  