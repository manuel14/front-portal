import {
    ADMIN_RECEIPTS_REQUEST,
    ADMIN_RECEIPTS_RESPONSE,
    ADMIN_RECEIPTS_ERROR,
    ADMIN_RECEIPTS_SUCCESS,
    ADMIN_RECEIPTS_PAGE_CHANGE
  } from "./action";
  
  const defaultState = {
    receipts: [],
    size: 5,
    page:1,
    loading: false
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ADMIN_RECEIPTS_RESPONSE: {
        return {
          ...state,
          receipts: action.response.results,
          items: action.response.count,
          loading:false

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
          ...state,
          loading: true
        };
      }
      case ADMIN_RECEIPTS_ERROR: {
        return {
          ...state,
          error: action.response,
          loading: false
        };
      }
      case ADMIN_RECEIPTS_PAGE_CHANGE: {
        return {
          ...state,
          page: action.page
        }
      }
      default: {
        return state;
      }
    }
  }
  