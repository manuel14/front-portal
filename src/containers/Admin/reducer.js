import {
    ADMIN_EMPLOYEES_REQUEST,
    ADMIN_EMPLOYEES_RESPONSE,
    ADMIN_EMPLOYEES_ERROR,
    ADMIN_EMPLOYEES_SUCCESS
  } from "./action";
  
  const defaultState = {
    employees: []
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case ADMIN_EMPLOYEES_RESPONSE: {
        return {
          ...state,
          employees: action.response.results,

        };
      }
      case ADMIN_EMPLOYEES_SUCCESS: {
        return {
          ...state,
          employees: []
        };
      }
      
      case ADMIN_EMPLOYEES_REQUEST: {
        return {
          ...state
        };
      }
      case ADMIN_EMPLOYEES_ERROR: {
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
  