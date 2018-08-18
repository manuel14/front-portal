import { post, get, patch } from "../../api";
import {push} from 'react-router-redux';

export const RECEIPTS_REQUEST = 'RECEIPTS_REQUEST';
export function receiptsRequest() {
    return {
        type: RECEIPTS_REQUEST
    }
}

export const RECEIPTS_RESPONSE = 'RECEIPTS_RESPONSE';
export function receiptsResponse(response) {
    return {
        type: RECEIPTS_RESPONSE,
        response
    }
}

export const RECEIPTS_ERROR = 'RECEIPTS_ERROR';
export function receiptsError(error) {
    return {
        type: RECEIPTS_REQUEST,
        error
    }
}

export function getReceipts() {
    return dispatch => {
        dispatch(receiptsRequest());
        return get(`/api/recibo/recibos_empleado/`)
            .then(res => {
                dispatch(receiptsResponse(res))
            })
            .catch(err => {
                dispatch(receiptsError(err))
            }
            );
    };
}

export function patchReceipt(receiptId){
    console.log("llego a patch");
    console.log(receiptId);
    return dispatch => {
        dispatch(receiptsRequest());
        const current = new Date().toISOString();
        const body = {abierto: current}
        return patch(`/api/recibo/${receiptId}/`, body)
            .then(response => {
                console.log(response)
                this.props.history.push(`/recibo/${receiptId}`);

            })
            .catch(err => {
                console.log(err)
                dispatch(receiptsError(err))
            })
    }
}

export function postReceipt(receipt){
    return dispatch => {
        dispatch(receiptsRequest());
        return post(`/api/recibo/`, receipt)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
                dispatch(receiptsError(err))
            })
    }
}