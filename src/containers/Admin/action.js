import { get, post} from "../../api";
import {success} from 'react-notification-system-redux';

export const ADMIN_EMPLOYEES_REQUEST = 'ADMIN_EMPLOYEES_REQUEST';
export function receiptsRequest() {
    return {
        type: ADMIN_EMPLOYEES_REQUEST
    }
}

export const ADMIN_EMPLOYEES_RESPONSE = 'ADMIN_EMPLOYEES_RESPONSE';
export function receiptsResponse(response) {
    return {
        type: ADMIN_EMPLOYEES_RESPONSE,
        response
    }
}

export const ADMIN_EMPLOYEES_ERROR = 'ADMIN_EMPLOYEES_ERROR';
export function receiptsError(error) {
    return {
        type: ADMIN_EMPLOYEES_ERROR,
        error
    }
}

export const ADMIN_EMPLOYEES_SUCCESS = 'ADMIN_EMPLOYEES_SUCCESS';
export function receiptsSuccess(response) {
    return {
        type: ADMIN_EMPLOYEES_SUCCESS,
        response
    }
}

export function postReceipt(receipt){
    return dispatch => {
        dispatch(receiptsRequest());
        return post(`/api/recibo/`, receipt, "form")
            .then(response => {
                const notificationOpts = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Éxito',
                    message: 'Los recibos se crearon correctamente',
                    position: 'tr',
                    autoDismiss: 0
                  };
                dispatch(success(notificationOpts))
            })
            .catch(err => {
                dispatch(receiptsError(err))
            })
    }
}

export function getEmployees() {
    return dispatch => {
        dispatch(receiptsRequest());
        return get(`/api/empleado/`)
            .then(res => {
                dispatch(receiptsResponse(res))
            })
            .catch(err => {
                dispatch(receiptsError(err))
            });
    }
}