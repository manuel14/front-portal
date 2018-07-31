import "whatwg-fetch";
import { omitBy, isNil } from "lodash";
import downloadjs from "downloadjs";
import { api_url } from "./backend_config";

function parseJSON(response) {
  return response.status !== 204 && response.json();
}

function parseBlob(response) {
  return response.blob();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 400) {
    return response;
  }
  const error = new Error();
  error.status = response.status;
  error.statusText = response.statusText;
  return response
    .json()
    .then(body => (error.body = body))
    .catch(() => {}) // Catch body parsing errors and continue
    .then(() => {
      throw error;
    });
}

function getHeaders(contentType) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": `JWT ${localStorage.jwtToken}`
  };
  return headers;
}

export function request(url, options) {
  const cleanOptions = omitBy(options, isNil);
  const fetchOptions = {
    ...cleanOptions,
    credentials: "same-origin"
  };
  return fetch(url, fetchOptions)
    .then(checkStatus)
    .then(parseJSON);
}

export function post(url, body) {
  const url_hard = api_url;
  const urlStr = `${url_hard}${url}`;
  return request(urlStr, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(body)
  });
}

export function get(url, params) {
  const url_hard = api_url;
  const urlParams = encodeQueryData(omitBy(params, isNil));
  const urlStr = urlParams
    ? `${url_hard}${url}?${urlParams}`
    : `${url_hard}${url}`;
  return request(urlStr, {
    method: "GET",
    headers: getHeaders()
  });
}

export function remove(url) {
  return request(url, {
    method: "DELETE",
    headers: getHeaders()
  });
}

export function put(url, body) {
  const cleanBody = omitBy(body, isNil);
  return request(url, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(cleanBody)
  });
}

export function patch(url, body) {
  const url_hard = api_url;
  const urlStr = `${url_hard}${url}`;
  return request(urlStr, {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify(body)
  });
}

export function getFile(url, params, fileName) {
  const urlParams = encodeQueryData(omitBy(params, isNil));
  const urlStr = urlParams ? `${url}?${urlParams}` : `${url}`;
  return fetch(urlStr, {
    method: "GET",
    headers: getHeaders(),
    credentials: "same-origin"
  })
    .then(checkStatus)
    .then(parseBlob)
    .then(blob => downloadjs(blob, fileName, blob.type));
}

function encodeQueryData(data) {
  const ret = [];
  Object.keys(data).forEach(key => {
    ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
  });
  return ret.join("&");
}
