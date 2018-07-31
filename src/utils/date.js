import moment from 'moment-timezone';

function format(dateString) {
  return (
    moment(dateString).format('MM-DD-YYYY hh:mm A') +
    ' ' +
    moment.tz('America/Los_Angeles').format('z')
  );
}

function compactFormat(dateString) {
  return moment(dateString).format('MMDDYYYY');
}

function casesDateFormat(dateString) {
  return moment.tz(dateString, 'Etc/GMT-0').format('MM-DD-YYYY');
}

export const afterToday = day => day.isAfter(moment(), 'day');

export { format, compactFormat, casesDateFormat };
