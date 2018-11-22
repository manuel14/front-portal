import { get, patch} from "../../api";
import * as moment from 'moment';

export const RECEIPT_DETAIL_REQUEST = 'RECEIPT_DETAIL_REQUEST';
export function receiptRequest() {
    return {
        type: RECEIPT_DETAIL_REQUEST
    }
}

export const RECEIPT_DETAIL_RESPONSE = 'RECEIPT_DETAIL_RESPONSE';
export function receiptResponse(response) {
    return {
        type: RECEIPT_DETAIL_RESPONSE,
        response
    }
}

export const RECEIPT_DETAIL_ERROR = 'RECEIPT_DETAIL_ERROR';
export function receiptError(error) {
    return {
        type: RECEIPT_DETAIL_REQUEST,
        error
    }
}

export function getReceipt(receiptId) {
    return dispatch => {
        dispatch(receiptRequest());
        return get(`/api/recibo/${receiptId}/`)
            .then(res => {
                dispatch(receiptResponse(res))
            })
            .catch(err => {
               dispatch(receiptError(err));
            }
            );
    };
}


export function patchReceipt(receiptId){
    return dispatch => {
        dispatch(receiptRequest());
        const current = moment().format("YYYY-MM-DDThh:mm:ss");
        let body = new FormData();
        body.append("abierto", current);
        return patch(`/api/recibo/${receiptId}/`, body, "form")
            .then(response => {
                receiptResponse(response)
            })
            .catch(err => {
                dispatch(receiptError(err))
            })
    }
}
