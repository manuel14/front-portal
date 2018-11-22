import {get, patch, post} from '../../api';
import {success} from 'react-notification-system-redux';

export const NOTIFICATION_DETAIL_REQUEST = 'NOTIFICATION_DETAIL_REQUEST';
export function notificationRequest() {
    return {
        type: NOTIFICATION_DETAIL_REQUEST
    }
}

export const NOTIFICATION_DETAIL_RESPONSE = 'NOTIFICATION_DETAIL_RESPONSE';
export function notificationResponse(response) {
    return {
        type: NOTIFICATION_DETAIL_RESPONSE,
        response
    }
}

export const NOTIFICATION_DETAIL_ERROR = 'NOTIFICATION_DETAIL_ERROR';
export function notificationError(error) {
    return {
        type: NOTIFICATION_DETAIL_REQUEST,
        error
    }
}

export function getNotification(notificationId) {
    return dispatch => {
        dispatch(notificationRequest());
        return get(`/api/mensaje/${notificationId}/`)
            .then(res => {
                dispatch(notificationResponse(res))
            })
            .catch(err => {
               dispatch(notificationError(err));
            }
            );
    };
}

export function postNotification(notification) {
    return dispatch => {
        dispatch(notificationRequest());
        return post(`/api/mensaje/`, notification)
            .then(res => {
                const notificationOpts = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Éxito',
                    message: 'Su notificación fue enviada correctamente',
                    position: 'tr',
                    autoDismiss: 0
                };
                dispatch(success(notificationOpts))
                dispatch(notificationResponse(res))
            })
            .catch(err => {
               dispatch(notificationError(err));
            }
            );
    };
}

export function patchNotification(notification) {
    return dispatch => {
        dispatch(notificationRequest());
        const current = new Date().toISOString();
        const body = {contestado: current}
        return patch(`/api/mensaje/${notification}/`, body)
            .then(res => {
                dispatch(notificationResponse(res))
            })
            .catch(err => {
               dispatch(notificationError(err));
            }
            );
    };
}
