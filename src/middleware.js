import Notifications from 'react-notification-system-redux';
import { get } from 'lodash';
import {push} from 'react-router-redux';
import {logoutUser} from './containers/App/action'

const ERROR_SUFFIX = 'detail';
const DEFAULT_ERROR_MESSAGE = 'Ha ocurrido un error al conectarse con el servidor';
const DEFAULT_ERROR_TITLE = '';
const DEFAULT_ERROR_AUTODISMISS = 4;
const DEFAULT_ERROR = {
  title: DEFAULT_ERROR_TITLE,
  message: DEFAULT_ERROR_MESSAGE,
};

const authMiddleware = ({ dispatch }) => next => action => {
  if (action.error && action.error.status === 401) {
    //window.location = action.error.body.redirect;
    dispatch(logoutUser())
  }
  if (action.response && action.response.redirect) {
    window.location = action.response.redirect;
  }
  next(action);
};

const errorMiddleware = ({ dispatch }) => next => action => {
  console.log(action);
  if (action.error && action.error.status !== 401) {
    const error = get(action.error.body, 'error');
    const { title, message } = error ? error : DEFAULT_ERROR;
    const notification = {
      autoDismiss: action.error.autoDismiss || DEFAULT_ERROR_AUTODISMISS,
      message:
        message ||
        action.error.customMessage ||
        get(action.error, 'body.response.body.message') ||
        DEFAULT_ERROR_MESSAGE,
      title: title || DEFAULT_ERROR_TITLE,
    };
    console.log(notification);

    dispatch(Notifications.error(notification));
  }
  next(action);
};

export { authMiddleware, errorMiddleware };
