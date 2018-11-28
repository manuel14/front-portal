import { get } from "../../api";

export const ADMIN_SUBMISSIONS_ABSENCE_REQUEST = 'ADMIN_SUBMISSIONS_ABSENCE_REQUEST';
export function submissionsAbsenceRequest() {
    return {
        type: ADMIN_SUBMISSIONS_ABSENCE_REQUEST
    }
}

export const ADMIN_SUBMISSIONS_ABSENCE_RESPONSE = 'ADMIN_SUBMISSIONS_ABSENCE_RESPONSE';
export function submissionsAbsenceResponse(response) {
    return {
        type: ADMIN_SUBMISSIONS_ABSENCE_RESPONSE,
        response
    }
}

export const ADMIN_SUBMISSIONS_ABSENCE_ERROR = 'ADMIN_SUBMISSIONS_ABSENCE_ERROR';
export function submissionsAbsenceError(error) {
    return {
        type: ADMIN_SUBMISSIONS_ABSENCE_ERROR,
        error
    }
}


export const ADMIN_SUBMISSIONS_MONEY_REQUEST = 'ADMIN_SUBMISSIONS_MONEY_REQUEST';
export function submissionsMoneyRequest() {
    return {
        type: ADMIN_SUBMISSIONS_MONEY_REQUEST
    }
}

export const ADMIN_SUBMISSIONS_MONEY_RESPONSE = 'ADMIN_SUBMISSIONS_MONEY_RESPONSE';
export function submissionsMoneyResponse(response) {
    return {
        type: ADMIN_SUBMISSIONS_MONEY_RESPONSE,
        response
    }
}

export const ADMIN_SUBMISSIONS_MONEY_ERROR = 'ADMIN_SUBMISSIONS_MONEY_ERROR';
export function submissionsMoneyError(error) {
    return {
        type: ADMIN_SUBMISSIONS_MONEY_ERROR,
        error
    }
}


export const ADMIN_SUBMISSIONS_VACATIONS_REQUEST = 'ADMIN_SUBMISSIONS_VACATIONS_REQUEST';
export function submissionsVacationsRequest() {
    return {
        type: ADMIN_SUBMISSIONS_VACATIONS_REQUEST
    }
}

export const ADMIN_SUBMISSIONS_VACATIONS_RESPONSE = 'ADMIN_SUBMISSIONS_VACATIONS_RESPONSE';
export function submissionsVacationsResponse(response) {
    return {
        type: ADMIN_SUBMISSIONS_VACATIONS_RESPONSE,
        response
    }
}

export const ADMIN_SUBMISSIONS_VACATIONS_ERROR = 'ADMIN_SUBMISSIONS_VACATIONS_ERROR';
export function submissionsVacationsError(error) {
    return {
        type: ADMIN_SUBMISSIONS_VACATIONS_ERROR,
        error
    }
}

function getAbsenceSubmissions(){
    return dispatch => {
        dispatch(submissionsAbsenceRequest());
        return get(`/api/formularioLicencia/`)
            .then(response => { 
                dispatch(submissionsAbsenceResponse(response)) })
            .catch(err => dispatch(submissionsAbsenceError(err)))

    }
}

function getMoneySubmissions() {
    return dispatch => {
        dispatch(submissionsMoneyRequest());
        return get(`/api/formularioAdelanto/`)
            .then(response => { 
                dispatch(submissionsMoneyResponse(response)) })
            .catch(err => dispatch(submissionsMoneyError(err)))

    }
}

function getVacationsSubmissions() {
    return dispatch => {
        dispatch(submissionsVacationsRequest());
        return get(`/api/formularioVacaciones/`)
            .then(response => {
                dispatch(submissionsVacationsResponse(response));
            })
            .catch(err => dispatch(submissionsVacationsError(err)));
    }
}


export function getSubmissions() {
    return dispatch => {
        return Promise.all([
            dispatch(getAbsenceSubmissions()),
            dispatch(getMoneySubmissions()),
            dispatch(getVacationsSubmissions())])
    }
}
