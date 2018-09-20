import {
    ADMIN_RECEIPTS_REQUEST,
    ADMIN_RECEIPTS_RESPONSE,
    ADMIN_RECEIPTS_ERROR,
    ADMIN_RECEIPTS_SUCCESS
  } from "./action";
  
  const defaultState = {
    employees: []
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ADMIN_RECEIPTS_RESPONSE: {
        return {
          ...state,
          employees: action.response,

        };
      }
      case ADMIN_RECEIPTS_SUCCESS: {
        return {
          ...state,
          employees: []
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
          error: action.response,
          employees: []
        };
      }
      default: {
        return state;
      }
    }
  }
  