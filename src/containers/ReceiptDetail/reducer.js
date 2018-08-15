import {
    RECEIPT_REQUEST,
    RECEIPT_RESPONSE,
    RECEIPT_ERROR
  } from "./action";
  
  const defaultState = {
    receipt: {}
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case RECEIPT_RESPONSE: {
        return {
          ...state,
          receipt: action.response
        };
      }
      
      case RECEIPT_REQUEST: {
        return {
          ...state
        };
      }
      case RECEIPT_ERROR: {
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
  