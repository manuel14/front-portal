import { post} from "../../api";
import {success} from 'react-notification-system-redux'

export const VACATION_REQUEST = 'VACATION_REQUEST';
export function vacationRequest() {
    return {
        type: VACATION_REQUEST
    }
}

export const VACATION_RESPONSE = 'VACATION_RESPONSE';
export function vacationResponse(response) {
    return {
        type: VACATION_RESPONSE,
        response
    }
}

export const VACATION_ERROR = 'VACATION_ERROR';
export function vacationError(error) {
    return {
        type: VACATION_REQUEST,
        error
    }
}


export function postVacation(data){
    return dispatch => {
        dispatch(vacationRequest());
        return post(`/api/formularioVacaciones/`, data)
            .then(response => {
                const msg = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Éxito',
                    message: 'Su solicitud fué enviada correctamente',
                    position: 'tr',
                    autoDismiss: 0
                  };
                dispatch(success(msg));
                dispatch(vacationResponse(response));
            })
            .catch(err => {
                dispatch(vacationError(err))
            })
    }
}