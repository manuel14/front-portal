import {
  ADMIN_SUBMISSIONS_ABSENCE_REQUEST,
  ADMIN_SUBMISSIONS_ABSENCE_RESPONSE,
  ADMIN_SUBMISSIONS_ABSENCE_ERROR,
  ADMIN_SUBMISSIONS_MONEY_REQUEST,
  ADMIN_SUBMISSIONS_MONEY_RESPONSE,
  ADMIN_SUBMISSIONS_MONEY_ERROR,
  ADMIN_SUBMISSIONS_VACATIONS_REQUEST,
  ADMIN_SUBMISSIONS_VACATIONS_RESPONSE,
  ADMIN_SUBMISSIONS_VACATIONS_ERROR,
} from "./action";

const defaultState = {
  absenceSubmissions: [],
  moneySubmissions: [],
  vacationsSubmissions: []
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ADMIN_SUBMISSIONS_ABSENCE_RESPONSE: {
      return {
        ...state,
        absenceSubmissions: action.response.results
      };
    }

    case ADMIN_SUBMISSIONS_ABSENCE_REQUEST: {
      return {
        ...state
      };
    }
    case ADMIN_SUBMISSIONS_ABSENCE_ERROR: {
      return {
        ...state,
        error: action.response
      };
    }
    case ADMIN_SUBMISSIONS_MONEY_RESPONSE: {
      return {
        ...state,
        moneySubmissions: action.response.results
      };
    }

    case ADMIN_SUBMISSIONS_MONEY_REQUEST: {
      return {
        ...state
      };
    }
    case ADMIN_SUBMISSIONS_MONEY_ERROR: {
      return {
        ...state,
        error: action.response
      };
    }
    case ADMIN_SUBMISSIONS_VACATIONS_RESPONSE: {
      return {
        ...state,
        vacationsSubmissions: action.response.results
      };
    }

    case ADMIN_SUBMISSIONS_VACATIONS_REQUEST: {
      return {
        ...state
      };
    }
    case ADMIN_SUBMISSIONS_VACATIONS_ERROR: {
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
