import {
    RECEIPT_DETAIL_REQUEST,
    RECEIPT_DETAIL_RESPONSE,
    RECEIPT_DETAIL_ERROR
  } from "./action";
  
  const defaultState = {
    receipt: {},
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case RECEIPT_DETAIL_RESPONSE: {
        return {
          ...state,
          receipt: action.response,
        };
      }
      
      case RECEIPT_DETAIL_REQUEST: {
        return {
          ...state
        };
      }
      case RECEIPT_DETAIL_ERROR: {
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
  