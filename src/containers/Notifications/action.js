import { get} from "../../api";

export const NOTIFICATIONS_REQUEST = 'NOTIFICATIONS_REQUEST';
export function notificationsRequest() {
    return {
        type: NOTIFICATIONS_REQUEST
    }
}

export const NOTIFICATIONS_RESPONSE = 'NOTIFICATIONS_RESPONSE';
export function notificationsResponse(response) {
    return {
        type: NOTIFICATIONS_RESPONSE,
        response
    }
}

export const NOTIFICATIONS_ERROR = 'NOTIFICATIONS_ERROR';
export function notificationsError(error) {
    return {
        type: NOTIFICATIONS_REQUEST,
        error
    }
}

export function getNofications() {
    return dispatch => {
        dispatch(NOTIFICATIONSRequest());
        return get(`/api/recibo/${NOTIFICATIONSId}/`)
            .then(res => {
                console.log(res)
                dispatch(NOTIFICATIONSResponse(res))
            })
            .catch(err => {
               console.log(err);
            }
            );
    };
}

export function patchNOTIFICATIONS(NOTIFICATIONSId) {
    return dispatch => {
        dispatch(NOTIFICATIONSRequest());
        return get(`/api/recibo/${NOTIFICATIONSId}/`)
            .then(res => {
                console.log(res)
                dispatch(NOTIFICATIONSResponse(res))
            })
            .catch(err => {
               console.log(err);
            }
            );
    };
}