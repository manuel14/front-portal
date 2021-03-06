import "whatwg-fetch";
import { omitBy, isNil } from "lodash";
import downloadjs from "downloadjs";
const api_url = process.env.REACT_APP_API_URL;
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

function getHeaders(action="get", contentType) {
  const headers = {
    "Authorization": `JWT ${localStorage.jwtToken}`
  };
  if (contentType !== "form"){
    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";
  }
  else if(action === "patch"){
    headers["Content-Type"] = "multipart/form-data; boundary=AaB03x--AaB03x";
  }
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

export function post(url, body, headers="application/json") {
  const url_hard = api_url;
  const urlStr = `${url_hard}${url}`;
  if(headers !== "form"){
    body = JSON.stringify(body)
  }
  return request(urlStr, {
    method: "POST",
    headers: getHeaders("post", headers),
    body: body
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
  const url_hard = api_url;
  const urlStr = `${url_hard}${url}`;
  return request(urlStr, {
    method: "DELETE",
    headers: getHeaders()
  });
}

export function put(url, body) {
  const cleanBody = omitBy(body, isNil);
  const url_hard = api_url;
  const urlStr = `${url_hard}${url}`;
  return request(urlStr, {
    method: "PUT",
    headers: getHeaders("put"),
    body: JSON.stringify(cleanBody)
  });
}



export function patch(url, body, headers="application/json") {
  const url_hard = api_url;
  const urlStr = `${url_hard}${url}`;
  if(headers !== "form"){
    body = JSON.stringify(body);
  }
  return request(urlStr, {
    method: "PATCH",
    headers: getHeaders("patch", headers),
    body: body
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
