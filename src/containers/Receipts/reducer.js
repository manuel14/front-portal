import {
    RECEIPTS_REQUEST,
    RECEIPTS_RESPONSE,
    RECEIPTS_ERROR
  } from "./action";
  
  const defaultState = {
    loading: false,
    receipts: []
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case RECEIPTS_RESPONSE: {
        return {
          ...state,
          receipts: action.response,
          loading: false
        };
      }
      
      case RECEIPTS_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
      case RECEIPTS_ERROR: {
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
  