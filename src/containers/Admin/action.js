import { get, post} from "../../api";
import {success} from 'react-notification-system-redux';

export const ADMIN_RECEIPTS_REQUEST = 'ADMIN_RECEIPTS_REQUEST';
export function receiptsRequest() {
    return {
        type: ADMIN_RECEIPTS_REQUEST
    }
}

export const ADMIN_RECEIPTS_RESPONSE = 'ADMIN_RECEIPTS_RESPONSE';
export function receiptsResponse(response) {
    return {
        type: ADMIN_RECEIPTS_RESPONSE,
        response
    }
}

export const ADMIN_RECEIPTS_ERROR = 'ADMIN_RECEIPTS_ERROR';
export function receiptsError(error) {
    return {
        type: ADMIN_RECEIPTS_ERROR,
        error
    }
}

export const ADMIN_RECEIPTS_SUCCESS = 'ADMIN_RECEIPTS_SUCCESS';
export function receiptsSuccess(response) {
    return {
        type: ADMIN_RECEIPTS_SUCCESS,
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