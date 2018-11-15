import { get} from "../../api";
import {success} from 'react-notification-system-redux';

export const ADMIN_RECEIPTS_REQUEST = 'ADMIN_RECEIPTS_REQUEST';
export function receiptsRequest() {
    return {
        type: ADMIN_RECEIPTS_REQUEST
    }
}

export const ADMIN_RECEIPTS_RESPONSE = 'ADMIN_RECEIPTS_RESPONSE';
export function receiptsResponse(response) {
    return {
        type: ADMIN_RECEIPTS_RESPONSE,
        response
    }
}

export const ADMIN_RECEIPTS_ERROR = 'ADMIN_RECEIPTS_ERROR';
export function receiptsError(error) {
    return {
        type: ADMIN_RECEIPTS_ERROR,
        error
    }
}

export const ADMIN_RECEIPTS_SUCCESS = 'ADMIN_RECEIPTS_SUCCESS';
export function receiptsSuccess(response) {
    return {
        type: ADMIN_RECEIPTS_SUCCESS,
        response
    }
}

export const ADMIN_RECEIPTS_PAGE_CHANGE = 'ADMIN_RECEIPTS_PAGE_CHANGE';
export function pageChange(page){
    return {
        type: ADMIN_RECEIPTS_PAGE_CHANGE,
        page
    }

}




export function getReceipts(page) {
    return dispatch => {
        dispatch(receiptsRequest());
        return get(`/api/recibo/?page=${page}`)
            .then(res => {
                dispatch(receiptsResponse(res))
            })
            .catch(err => {
                dispatch(receiptsError(err))
            });
    }
}

