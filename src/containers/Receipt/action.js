import { post, get, patch } from "../../api";
import {push} from 'react-router-redux';

export const RECEIPT_REQUEST = 'RECEIPT_REQUEST';
export function receiptRequest() {
    return {
        type: RECEIPT_REQUEST
    }
}

export const RECEIPT_RESPONSE = 'RECEIPT_RESPONSE';
export function receiptResponse(response) {
    return {
        type: RECEIPT_RESPONSE,
        response
    }
}

export const RECEIPT_ERROR = 'RECEIPT_ERROR';
export function receiptError(error) {
    return {
        type: RECEIPT_REQUEST,
        error
    }
}

export function getReceipts() {
    return dispatch => {
        dispatch(receiptRequest());
        return get(`/api/recibo/recibos_empleado/`)
            .then(res => dispatch(receiptResponse(res)))
            .catch(err => {
                if (err.status == 401) {
                    console.log("entro a 401")
                    localStorage.removeItem('jwtToken');
                    localStorage.removeItem('userid');
                    localStorage.removeItem('staff');
                    dispatch(push('/login'));
                }
            }
            );
    };
}

export function patchReceipt(receiptId){
    return dispatch => {
        dispatch(receiptRequest());
        const current = new Date().toISOString();
        console.log(current);
        const body = {abierto: current}
        return patch(`/api/recibo/${receiptId}/`, body)
            .then(response => {
                console.log(response)
                dispatch(receiptResponse(response))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
