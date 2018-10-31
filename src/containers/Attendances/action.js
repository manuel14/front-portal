import { post, get, patch } from "../../api";
import {warning} from 'react-notification-system-redux'

export const ATTENDANCES_REQUEST = 'ATTENDANCES_REQUEST';
export function attendancesRequest() {
    return {
        type: ATTENDANCES_REQUEST
    }
}

export const ATTENDANCES_RESPONSE = 'ATTENDANCES_RESPONSE';
export function attendancesResponse(response) {
    return {
        type: ATTENDANCES_RESPONSE,
        response
    }
}

export const ATTENDANCES_ERROR = 'ATTENDANCES_ERROR';
export function attendancesError(error) {
    return {
        type: ATTENDANCES_REQUEST,
        error
    }
}

export function getAttendances() {
    return dispatch => {
        dispatch(attendancesRequest());
        return get(`/api/recibo/recibos_empleado/?tipo=F`)
            .then(res => {
                const unopened = res.filter(r => !r.abierto);
                const notificationOpts = {
                    // uid: 'once-please', // you can specify your own uid if required
                    title: 'Aviso',
                    message: `Usted tiene ${unopened.length} fichadas sin abrir`,
                    position: 'tr',
                    autoDismiss: 0
                };
                dispatch(warning(notificationOpts))
                dispatch(attendancesResponse(res))
            })
            .catch(err => {
                dispatch(attendancesError(err))
            });
    };
}

export function patchAttendance(attendanceId){
    return dispatch => {
        dispatch(attendancesRequest());
        const current = new Date().toISOString();
        const body = {abierto: current}
        return patch(`/api/recibo/${attendanceId}/`, body)
            .then(response => {
                this.props.history.push(`/fichada/${attendanceId}`);

            })
            .catch(err => {
                dispatch(attendancesError(err))
            })
    }
}

export function postReceipt(receipt){
    return dispatch => {
        dispatch(attendancesRequest());
        return post(`/api/recibo/`, receipt)
            .then(response => {
            })
            .catch(err => {
                dispatch(attendancesError(err))
            })
    }
}