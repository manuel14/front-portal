import { get } from "../../api";

export const SUBMISSIONS_ABSENCE_REQUEST = 'SUBMISSIONS_ABSENCE_REQUEST';
export function submissionsAbsenceRequest() {
    return {
        type: SUBMISSIONS_ABSENCE_REQUEST
    }
}

export const SUBMISSIONS_ABSENCE_RESPONSE = 'SUBMISSIONS_ABSENCE_RESPONSE';
export function submissionsAbsenceResponse(response) {
    return {
        type: SUBMISSIONS_ABSENCE_RESPONSE,
        response
    }
}

export const SUBMISSIONS_ABSENCE_ERROR = 'SUBMISSIONS_ABSENCE_ERROR';
export function submissionsAbsenceError(error) {
    return {
        type: SUBMISSIONS_ABSENCE_ERROR,
        error
    }
}

export const SUBMISSIONS_MONEY_REQUEST = 'SUBMISSIONS_MONEY_REQUEST';
export function submissionsMoneyRequest() {
    return {
        type: SUBMISSIONS_MONEY_REQUEST
    }
}

export const SUBMISSIONS_MONEY_RESPONSE = 'SUBMISSIONS_MONEY_RESPONSE';
export function submissionsMoneyResponse(response) {
    return {
        type: SUBMISSIONS_MONEY_RESPONSE,
        response
    }
}

export const SUBMISSIONS_MONEY_ERROR = 'SUBMISSIONS_MONEY_ERROR';
export function submissionsMoneyError(error) {
    return {
        type: SUBMISSIONS_MONEY_ERROR,
        error
    }
}


export const SUBMISSIONS_VACATIONS_REQUEST = 'SUBMISSIONS_VACATIONS_REQUEST';
export function submissionsVacationsRequest() {
    return {
        type: SUBMISSIONS_VACATIONS_REQUEST
    }
}

export const SUBMISSIONS_VACATIONS_RESPONSE = 'SUBMISSIONS_VACATIONS_RESPONSE';
export function submissionsVacationsResponse(response) {
    return {
        type: SUBMISSIONS_VACATIONS_RESPONSE,
        response
    }
}

export const SUBMISSIONS_VACATIONS_ERROR = 'SUBMISSIONS_VACATIONS_ERROR';
export function submissionsVacationsError(error) {
    return {
        type: SUBMISSIONS_VACATIONS_ERROR,
        error
    }
}

function getAbsenceSubmissions() {
    return dispatch => {
        dispatch(submissionsAbsenceRequest());
        return get(`/api/formularioLicencia/empleado/`)
            .then(response => {
                dispatch(submissionsAbsenceResponse(response));
            })
            .catch(err => dispatch(submissionsAbsenceError(err)));
    }
}

function getMoneySubmissions() {
    return dispatch => {
        dispatch(submissionsMoneyRequest());
        return get(`/api/formularioAdelanto/empleado/`)
            .then(response => { 
                dispatch(submissionsMoneyResponse(response)) })
            .catch(err => dispatch(submissionsMoneyError(err)))

    }
}

function getVacationsSubmissions() {
    return dispatch => {
        dispatch(submissionsVacationsRequest());
        return get(`/api/formularioVacaciones/empleado/`)
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

