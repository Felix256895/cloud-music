import request from './request';

export function cloudsearch(params: object) {
  return request.get('/cloudsearch', params);
}

export function banner(params?: object) {
  return request.get('/banner', params);
}
