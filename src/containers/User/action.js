import { get, patch } from "../../api";
import {success} from 'react-notification-system-redux';

export const USER_REQUEST = "prode/user/USER_REQUEST";
export function userRequest() {
  return {
    type: USER_REQUEST
  };
}

export const USER_RESPONSE = "prode/user/USER_RESPONSE";
export function userResponse(response) {
  return {
    type: USER_RESPONSE,
    response
  };
}

export const USER_ERROR = "prode/user/USER_ERROR";
export function userError(error) {
  return {
    type: USER_ERROR,
    error
  };
}



export function getEmployee(employeeId){
  return dispatch => {
    dispatch(userRequest());
    return get(`/api/empleado/${employeeId}/`)
      .then(res => {
        dispatch(userResponse(res));
      })
      .catch(err => {
        dispatch(userError(err));
      })
  }
}

export function updateEmployee(employee){
  return dispatch => {
    dispatch(userRequest());
    return patch(`/api/empleado/${employee.id}/`, employee)
      .then(res => {
        const notificationOpts = {
          // uid: 'once-please', // you can specify your own uid if required
          title: 'Éxito',
          message: `Sus datos han sido actualizados correctamente`,
          position: 'tr',
          autoDismiss: 0
        };
        dispatch(success(notificationOpts))
        dispatch(userResponse(res));
      })
      .catch(err =>  {
        dispatch(userError(err));
      })
  }
}

export function patchUser(data){
  return dispatch => {
    dispatch(userRequest());
    return patch(`/api/usuario/reset_password/`, data)
      .then(res => {
        const notificationOpts = {
          // uid: 'once-please', // you can specify your own uid if required
          title: 'Éxito',
          message: `Su contraseña ha sido actualizada correctamente, deberá ingresar nuevamente`,
          position: 'tr',
          autoDismiss: 0
        };
        dispatch(success(notificationOpts));
      })
      .catch(err => {
        dispatch(userError(err))
      })
  }
}