import { get} from "../../api";

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

export function getReceipt(receiptId) {
    return dispatch => {
        dispatch(receiptRequest());
        return get(`/api/recibo/${receiptId}/`)
            .then(res => {
                console.log(res)
                dispatch(receiptResponse(res))
            })
            .catch(err => {
               console.log(err);
            }
            );
    };
}


