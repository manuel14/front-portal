import {
    EVENTS_REQUEST,
    EVENTS_RESPONSE,
    EVENTS_ERROR
} from "./action";

const defaultState = {
    events: [],
    loading: false
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case EVENTS_RESPONSE: {
            return {
                ...state,
                events: action.response.results,
                loading: false
            };
        }
        case EVENTS_REQUEST: {
            return {
                ...state,
                loading: true
            };
        }
        case EVENTS_ERROR: {
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
