import Notifications from 'react-notification-system-redux';
import { get } from 'lodash';

const ERROR_SUFFIX = 'ERROR';
const DEFAULT_ERROR_MESSAGE = 'Something went wrong';
const DEFAULT_ERROR_TITLE = '';
const DEFAULT_ERROR_AUTODISMISS = 4;
const DEFAULT_ERROR = {
  title: DEFAULT_ERROR_TITLE,
  message: DEFAULT_ERROR_MESSAGE,
};

const authMiddleware = ({ dispatch }) => next => action => {
  const isError = action.type.match(new RegExp(`${ERROR_SUFFIX}$`, 'g'));
  console.log(isError);
  if (isError && action.error && action.error.status === 401) {
    window.location = action.error.body.redirect;
  }
  if (action.response && action.response.redirect) {
    window.location = action.response.redirect;
  }
  next(action);
};

const errorMiddleware = ({ dispatch }) => next => action => {
  const isError = action.type.match(new RegExp(`${ERROR_SUFFIX}$`, 'g'));
  if (isError && action.error && !action.error.skipNotification) {
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

    dispatch(Notifications.error(notification));
  }
  next(action);
};

export { authMiddleware, errorMiddleware };
