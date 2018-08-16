import { get } from "../../api";

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

export function getEmployees(){
    console.log("get employees");
    return dispatch => {
        dispatch(notificationsRequest());
        return get(`/api/empleado/`)
            .then(res => {
                console.log("volvio del backend employees")
                console.log(res)
                dispatch(notificationsResponse(res))
            })
            .catch(err => {
                console.log(err);
            })
    }
}