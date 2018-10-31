import {
    ATTENDANCE_REQUEST,
    ATTENDANCE_RESPONSE,
    ATTENDANCE_ERROR
  } from "./action";
  
  const defaultState = {
    attendance: {},
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ATTENDANCE_RESPONSE: {
        return {
          ...state,
          attendance: action.response,
        };
      }
      
      case ATTENDANCE_REQUEST: {
        return {
          ...state
        };
      }
      case ATTENDANCE_ERROR: {
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
  