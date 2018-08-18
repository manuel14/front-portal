import { get, post } from "../../api";
import {success, error} from 'react-notification-system-redux';

export const ADMIN_NOTIFICATIONS_REQUEST = 'ADMIN_NOTIFICATIONS_REQUEST';
export function notificationsRequest() {
    return {
        type: ADMIN_NOTIFICATIONS_REQUEST
    }
}

export const ADMIN_NOTIFICATIONS_RESPONSE = 'ADMIN_NOTIFICATIONS_RESPONSE';
export function notificationsResponse(response) {
    return {
        type: ADMIN_NOTIFICATIONS_RESPONSE,
        response
    }
}

export const ADMIN_NOTIFICATIONS_ERROR = 'ADMIN_NOTIFICATIONS_ERROR';
export function notificationsError(error) {
    return {
        type: ADMIN_NOTIFICATIONS_ERROR,
        error
    }
}

export const ADMIN_NOTIFICATIONS_SUCCESS = 'ADMIN_NOTIFICATIONS_SUCCESS';
export function notificationsSuccess(response) {
    return {
        type: ADMIN_NOTIFICATIONS_SUCCESS,
        response
    }
}

export function getEmployees() {
    return dispatch => {
        dispatch(notificationsRequest());
        return get(`/api/empleado/`)
            .then(res => {
                dispatch(notificationsResponse(res))
            })
            .catch(err => {
                console.log(err);
                dispatch(notificationsError(err))
            });
    }
}

export function postMensaje(msg) {
    return dispatch => {
        dispatch(notificationsRequest());
        return post('/api/mensaje/', msg)
            .then(res => {
                const notificationOpts = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Éxito',
                    message: 'Su notificación fue enviada correctamente',
                    position: 'tr',
                    autoDismiss: 0
                };
                dispatch(success(notificationOpts))

            })
            .catch(err => {
                console.log(err);
                dispatch(notificationsError(err));
            })
    }
}