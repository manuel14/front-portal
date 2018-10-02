import { get} from "../../api";

export const EVENTS_REQUEST = 'EVENTS_REQUEST';
export function eventsRequest() {
    return {
        type: EVENTS_REQUEST
    }
}

export const EVENTS_RESPONSE = 'EVENTS_RESPONSE';
export function eventsResponse(response) {
    return {
        type: EVENTS_RESPONSE,
        response
    }
}

export const EVENTS_ERROR = 'EVENTS_ERROR';
export function eventsError(error) {
    return {
        type: EVENTS_ERROR,
        error
    }
}

export const EVENTS_SUCCESS = 'EVENTS_SUCCESS';
export function eventsSuccess(response) {
    return {
        type: EVENTS_SUCCESS,
        response
    }
}

export function getEvents() {
    return dispatch => {
        dispatch(eventsRequest());
        return get(`/api/evento/`)
            .then(res => {
                dispatch(eventsResponse(res))
            })
            .catch(err => {
                console.log(err);
                dispatch(eventsError(err))
            });
    }
}