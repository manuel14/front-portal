import Notifications from 'react-notification-system-redux';
import { get } from 'lodash';

const ERROR_SUFFIX = 'detail';
const DEFAULT_ERROR_MESSAGE = 'Ha ocurrido un error al conectarse con el servidor';
const DEFAULT_ERROR_TITLE = '';
const DEFAULT_ERROR_AUTODISMISS = 4;
const DEFAULT_ERROR = {
  title: DEFAULT_ERROR_TITLE,
  message: DEFAULT_ERROR_MESSAGE,
};

const authMiddleware = ({ dispatch }) => next => action => {
  //const isError = action.type.match(new RegExp(`${ERROR_SUFFIX}$`, 'g'));
  console.log(action);
  if (action.error.status === 401) {
    console.log("entro al if de authmid");
    console.log(action.error);
    window.location = action.error.body.redirect;
  }
  if (action.response && action.response.redirect) {
    window.location = action.response.redirect;
  }
  next(action);
};

const errorMiddleware = ({ dispatch }) => next => action => {
  const isError = action.type.match(new RegExp(`${ERROR_SUFFIX}$`, 'g'));
  console.log(isError);
  if (isError && action.error && !action.error.skipNotification) {
    const error = get(action.error.body, 'error');
    console.log(error);
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
