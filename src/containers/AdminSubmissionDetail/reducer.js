import {
    ADMIN_SUBMISSION_DETAIL_REQUEST,
    ADMIN_SUBMISSION_DETAIL_RESPONSE,
    ADMIN_SUBMISSION_DETAIL_ERROR
  } from "./action";
  
  const defaultState = {
    submission: {},
    loading: false
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ADMIN_SUBMISSION_DETAIL_RESPONSE: {
        return {
          ...state,
          submission: action.response,
          loading:false
        };
      }
      case ADMIN_SUBMISSION_DETAIL_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }
      case ADMIN_SUBMISSION_DETAIL_ERROR: {
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
  