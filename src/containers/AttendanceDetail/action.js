import { get, patch} from "../../api";
import * as moment from 'moment';

export const ATTENDANCE_DETAIL_REQUEST = 'ATTENDANCE_DETAIL_REQUEST';
export function attendanceRequest() {
    return {
        type: ATTENDANCE_DETAIL_REQUEST
    }
}

export const ATTENDANCE_DETAIL_RESPONSE = 'ATTENDANCE_DETAIL_RESPONSE';
export function attendanceResponse(response) {
    return {
        type: ATTENDANCE_DETAIL_RESPONSE,
        response
    }
}

export const ATTENDANCE_DETAIL_ERROR = 'ATTENDANCE_DETAIL_ERROR';
export function attendanceError(error) {
    return {
        type: ATTENDANCE_DETAIL_REQUEST,
        error
    }
}

export function getAttendance(attendanceId) {
    return dispatch => {
        dispatch(attendanceRequest());
        return get(`/api/recibo/${attendanceId}/`)
            .then(res => {
                dispatch(attendanceResponse(res))
            })
            .catch(err => {
               dispatch(attendanceError(err));
            }
            );
    };
}


export function patchAttendance(attendanceId){
    return dispatch => {
        dispatch(attendanceRequest());
        const current = moment().format("YYYY-MM-DDThh:mm:ss");
        let body = new FormData();
        body.append("abierto", current);
        return patch(`/api/recibo/${attendanceId}/`, body, "form")
            .then(response => {
                attendanceResponse(response)
            })
            .catch(err => {
                dispatch(attendanceError(err))
            })
    }
}
