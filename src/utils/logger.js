import * as rb from 'rollbar';

export default function logger(config) {
  if (config) {
    const accessToken = atob(config.accessToken);
    return new rb({ ...config, accessToken });
  }
}
