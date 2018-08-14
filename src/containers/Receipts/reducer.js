import {
    RECEIPTS_REQUEST,
    RECEIPTS_RESPONSE,
    RECEIPTS_ERROR
  } from "./action";
  
  const defaultState = {
    receipts: []
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case RECEIPTS_RESPONSE: {
        return {
          ...state,
          receipts: action.response
        };
      }
      
      case RECEIPTS_REQUEST: {
        return {
          ...state
        };
      }
      case RECEIPTS_ERROR: {
        return {
          ...state,
          error: action.response
        };
      }
      default: {
        return state;
      }
    }
  }
  