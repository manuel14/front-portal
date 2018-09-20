import { get, patch } from "../../api";

export const NOTIFICATIONS_REQUEST = 'NOTIFICATIONS_REQUEST';
export function notificationsRequest() {
    return {
        type: NOTIFICATIONS_REQUEST
    }
}

export const NOTIFICATIONS_RESPONSE = 'NOTIFICATIONS_RESPONSE';
export function notificationsResponse(response) {
    return {
        type: NOTIFICATIONS_RESPONSE,
        response
    }
}

export const NOTIFICATIONS_ERROR = 'NOTIFICATIONS_ERROR';
export function notificationsError(error) {
    return {
        type: NOTIFICATIONS_ERROR,
        error
    }
}

export function getNotifications() {
    return dispatch => {
        dispatch(notificationsRequest());
        return get(`/api/mensaje/mensajes_empleado/${localStorage.id}/`)
            .then(res => {
                dispatch(notificationsResponse(res))
            })
            .catch(err => {
                dispatch(notificationsError(err))
            });
    };
}

export function patchNotification(id) {
    return dispatch => {
        dispatch(notificationsRequest());
        const current = new Date().toISOString();
        const body = {leido: current}
        return patch(`/api/mensaje/${id}/`, body)
            .then(res => {
                this.props.history.push(`/notificacion/${id}`)
            })
            .catch(err => {
                dispatch(notificationsError(err))
            });
    };
}