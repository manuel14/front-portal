import {
    SUBMISSIONS_ABSENCE_ERROR,
    SUBMISSIONS_ABSENCE_REQUEST,
    SUBMISSIONS_ABSENCE_RESPONSE,
    SUBMISSIONS_MONEY_REQUEST,
    SUBMISSIONS_MONEY_RESPONSE,
    SUBMISSIONS_MONEY_ERROR,
    SUBMISSIONS_VACATIONS_REQUEST,
    SUBMISSIONS_VACATIONS_RESPONSE,
    SUBMISSIONS_VACATIONS_ERROR,
  } from "./action";
  
  const defaultState = {
    absenceSubmissions: [],
    moneySubmissions: [],
    vacationsSubmissions: [],
    size: 5,
    page:1
  };
  
  export default function(state = defaultState, action) {
    switch (action.type) {
      case SUBMISSIONS_ABSENCE_RESPONSE: {
        return {
          ...state,
          absenceSubmissions: action.response
        };
      }
      
      case SUBMISSIONS_ABSENCE_REQUEST: {
        return {
          ...state
        };
      }
      case SUBMISSIONS_ABSENCE_ERROR: {
        return {
          ...state,
          error: action.response
        };
      }
      case SUBMISSIONS_MONEY_RESPONSE: {
        return {
          ...state,
          moneySubmissions: action.response
        };
      }
      
      case SUBMISSIONS_MONEY_REQUEST: {
        return {
          ...state
        };
      }
      case SUBMISSIONS_MONEY_ERROR: {
        return {
          ...state,
          error: action.response
        };
      }
      case SUBMISSIONS_VACATIONS_RESPONSE: {
        return {
          ...state,
          vacationsSubmissions: action.response
        };
      }
      
      case SUBMISSIONS_VACATIONS_REQUEST: {
        return {
          ...state
        };
      }
      case SUBMISSIONS_VACATIONS_ERROR: {
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
  