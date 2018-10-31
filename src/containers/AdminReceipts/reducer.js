import {
    ADMIN_RECEIPTS_REQUEST,
    ADMIN_RECEIPTS_RESPONSE,
    ADMIN_RECEIPTS_ERROR,
    ADMIN_RECEIPTS_SUCCESS
  } from "./action";
  
  const defaultState = {
    receipts: []
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ADMIN_RECEIPTS_RESPONSE: {
        return {
          ...state,
          receipts: action.response,

        };
      }
      case ADMIN_RECEIPTS_SUCCESS: {
        return {
          ...state,
          receipts: []
        };
      }
      
      case ADMIN_RECEIPTS_REQUEST: {
        return {
          ...state
        };
      }
      case ADMIN_RECEIPTS_ERROR: {
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
  