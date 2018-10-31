import { post} from "../../api";
import {success} from 'react-notification-system-redux'

export const MONEY_REQUEST = 'MONEY_REQUEST';
export function moneyRequest() {
    return {
        type: MONEY_REQUEST
    }
}

export const MONEY_RESPONSE = 'MONEY_RESPONSE';
export function moneyResponse(response) {
    return {
        type: MONEY_RESPONSE,
        response
    }
}

export const MONEY_ERROR = 'MONEY_ERROR';
export function moneyError(error) {
    return {
        type: MONEY_REQUEST,
        error
    }
}


export function postReceipt(data){
    return dispatch => {
        dispatch(moneyRequest());
        return post(`/api/formularioAdelanto/`, data)
            .then(response => {
                const msg = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Éxito',
                    message: 'Su solicitud fué enviada correctamente',
                    position: 'tr',
                    autoDismiss: 0
                  };
                dispatch(success(msg));
            })
            .catch(err => {
                dispatch(moneyError(err))
            })
    }
}