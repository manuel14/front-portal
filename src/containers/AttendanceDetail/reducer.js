import {
    ATTENDANCE_DETAIL_REQUEST,
    ATTENDANCE_DETAIL_RESPONSE,
    ATTENDANCE_DETAIL_ERROR
  } from "./action";
  
  const defaultState = {
    attendance: {},
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ATTENDANCE_DETAIL_RESPONSE: {
        return {
          ...state,
          attendance: action.response,
        };
      }
      
      case ATTENDANCE_DETAIL_REQUEST: {
        return {
          ...state
        };
      }
      case ATTENDANCE_DETAIL_ERROR: {
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
  