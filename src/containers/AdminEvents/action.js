import { get, post} from "../../api";
import {success, error} from 'react-notification-system-redux';

export const ADMIN_EVENTS_REQUEST = 'ADMIN_EVENTS_REQUEST';
export function eventsRequest() {
    return {
        type: ADMIN_EVENTS_REQUEST
    }
}

export const ADMIN_EVENTS_RESPONSE = 'ADMIN_EVENTS_RESPONSE';
export function eventsResponse(response) {
    return {
        type: ADMIN_EVENTS_RESPONSE,
        response
    }
}

export const ADMIN_EVENTS_ERROR = 'ADMIN_EVENTS_ERROR';
export function eventsError(error) {
    return {
        type: ADMIN_EVENTS_ERROR,
        error
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

export function postEvent(body) {
    return dispatch => {
        dispatch(eventsRequest());
        return post(`/api/evento/`, body)
            .then(res => {
                const notificationOpts = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Éxito',
                    message: 'Su Evento ha sido creado correctamente',
                    position: 'tr',
                    autoDismiss: 0
                };
                dispatch(success(notificationOpts))
            })
            .catch(err => {
                console.log(err);
                dispatch(eventsError(err))
            });
    }
}