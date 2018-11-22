import { post, get, patch } from "../../api";
import {warning} from 'react-notification-system-redux'

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
        type: RECEIPTS_ERROR,
        error
    }
}

export function getReceipts() {
    return dispatch => {
        dispatch(receiptsRequest());
        return get(`/api/recibo/recibos_empleado/`)
            .then(res => {
                const unopened = res.filter(r => !r.abierto);
                if (unopened.length !== 0){
                    const notificationOpts = {
                        // uid: 'once-please', // you can specify your own uid if required
                        title: 'Aviso',
                        message: `Usted tiene ${unopened.length} recibos sin abrir`,
                        position: 'tr',
                        autoDismiss: 0
                    };
                    dispatch(warning(notificationOpts))
                }
                dispatch(receiptsResponse(res))
            })
            .catch(err => {
                dispatch(receiptsError(err))
            });
    };
}

export function patchReceipt(receiptId){
    return dispatch => {
        dispatch(receiptsRequest());
        const current = new Date().toISOString();
        const body = {abierto: current}
        return patch(`/api/recibo/${receiptId}/`, body)
            .then(response => {
                this.props.history.push(`/recibo/${receiptId}`);

            })
            .catch(err => {
                dispatch(receiptsError(err))
            })
    }
}

export function postReceipt(receipt){
    return dispatch => {
        dispatch(receiptsRequest());
        return post(`/api/recibo/`, receipt)
            .then(response => {
            })
            .catch(err => {
                dispatch(receiptsError(err))
            })
    }
}