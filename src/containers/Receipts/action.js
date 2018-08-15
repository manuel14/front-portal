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
                if (err.status == 401) {
                    dispatch(push('/login'));
                    localStorage.removeItem('jwtToken')
                    localStorage.removeItem('userid')
                    localStorage.removeItem('staff')
                    
                }
            }
            );
    };
}

export function patchReceipt(receiptId){
    console.log("llego a patch");
    return dispatch => {
        dispatch(receiptsRequest());
        const current = new Date().toISOString();
        const body = {abierto: current}
        return patch(`/api/recibo/${receiptId}/`, body)
            .then(response => {
                this.props.history.push(`/recibo/${receiptId}`);
                dispatch(getReceipts())
            })
            .catch(err => {
                console.log(err)
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
            })
    }
}