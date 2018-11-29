import { post} from "../../api";
import {success} from 'react-notification-system-redux'

export const ABSENCE_REQUEST = 'ABSENCE_REQUEST';
export function absenceRequest() {
    return {
        type: ABSENCE_REQUEST
    }
}

export const ABSENCE_RESPONSE = 'ABSENCE_RESPONSE';
export function absenceResponse(response) {
    return {
        type: ABSENCE_RESPONSE,
        response
    }
}

export const ABSENCE_ERROR = 'ABSENCE_ERROR';
export function absenceError(error) {
    return {
        type: ABSENCE_REQUEST,
        error
    }
}


export function postAbsence(data){
    return dispatch => {
        dispatch(absenceRequest());
        return post(`/api/formularioLicencia/`, data)
            .then(response => {
                const msg = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Éxito',
                    message: 'Su solicitud fué enviada correctamente',
                    position: 'tr',
                    autoDismiss: 0
                  };
                dispatch(success(msg));
                dispatch(absenceResponse(response));
            })
            .catch(err => {
                dispatch(absenceError(err))
            })
    }
}