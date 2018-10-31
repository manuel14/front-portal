import { get, post, put, remove} from "../../api";
import {success, error} from 'react-notification-system-redux';

export const ADMIN_EVENT_REQUEST = 'ADMIN_EVENT_REQUEST';
export function eventRequest() {
    return {
        type: ADMIN_EVENT_REQUEST
    }
}

export const ADMIN_EVENT_RESPONSE = 'ADMIN_EVENT_RESPONSE';
export function eventResponse(response) {
    return {
        type: ADMIN_EVENT_RESPONSE,
        response
    }
}

export const ADMIN_EVENT_ERROR = 'ADMIN_EVENT_ERROR';
export function eventError(error) {
    return {
        type: ADMIN_EVENT_ERROR,
        error
    }
}

export function getEvent(eventId) {
    return dispatch => {
        dispatch(eventRequest());
        return get(`/api/evento/${eventId}`)
            .then(res => {
                dispatch(eventResponse(res))
            })
            .catch(err => {
                console.log(err);
                dispatch(eventError(err))
            });
    }
}

export function postEvent(body) {
    return dispatch => {
        dispatch(eventRequest());
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
                dispatch(eventResponse(res));
            })
            .catch(err => {
                console.log(err);
                dispatch(eventError(err))
            });
    }
}

export function putEvent(body, eventId) {
    return dispatch => {
        dispatch(eventRequest());
        return put(`/api/evento/${eventId}/`, body)
            .then(res => {
                const notificationOpts = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Éxito',
                    message: 'Su Evento ha sido modificado correctamente',
                    position: 'tr',
                    autoDismiss: 0
                };
                dispatch(success(notificationOpts));
            })
            .catch(err => {
                console.log(err);
                dispatch(eventError(err))
            });
    }
}

export function deleteEvent(eventId) {
    return dispatch => {
        dispatch(eventRequest());
        return remove(`/api/evento/${eventId}/`)
            .then(res => {
                const notificationOpts = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Éxito',
                    message: 'Su Evento ha sido eliminado correctamente',
                    position: 'tr',
                    autoDismiss: 0
                };
                dispatch(success(notificationOpts));
            })
            .catch(err => {
                console.log(err);
                dispatch(eventError(err))
            });
    }
}