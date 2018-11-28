import { get, patch} from "../../api";
import {success, error} from 'react-notification-system-redux';

export const ADMIN_SUBMISSION_DETAIL_REQUEST = 'ADMIN_SUBMISSION_DETAIL_REQUEST';
export function submissionDetailRequest() {
    return {
        type: ADMIN_SUBMISSION_DETAIL_REQUEST
    }
}

export const ADMIN_SUBMISSION_DETAIL_RESPONSE = 'ADMIN_SUBMISSION_DETAIL_RESPONSE';
export function submissionDetailResponse(response) {
    return {
        type: ADMIN_SUBMISSION_DETAIL_RESPONSE,
        response
    }
}

export const ADMIN_SUBMISSION_DETAIL_ERROR = 'ADMIN_SUBMISSION_DETAIL_ERROR';
export function submissionDetailError(error) {
    return {
        type: ADMIN_SUBMISSION_DETAIL_ERROR,
        error
    }
}

export function getSubmission(submissionId, tipo) {
    return dispatch => {
        dispatch(submissionDetailRequest());
        return get(`/api/formulario${tipo}/${submissionId}/`)
            .then(res => {
                console.log(res.empleado.nombre);
                dispatch(submissionDetailResponse(res))
            })
            .catch(err => {
                console.log(err);
                dispatch(submissionDetailError(err))
            });
    }
}



export function patchSubmission(tipo, submissionId, body) {
    return dispatch => {
        dispatch(submissionDetailRequest());
        console.log(body);
        return patch(`/api/formulario${tipo}/${submissionId}/`, body)
            .then(res => {
                const notificationOpts = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Éxito',
                    message: 'Su solicitud ha sido modificada correctamente',
                    position: 'tr',
                    autoDismiss: 0
                };
                dispatch(success(notificationOpts));
            })
            .catch(err => {
                console.log(err);
                dispatch(submissionDetailError(err))
            });
    }
}

