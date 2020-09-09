import request from './request';

export function cloudsearch(params: object) {
  return request.get('/cloudsearch', params);
}
