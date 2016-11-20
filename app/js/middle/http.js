import objectAssign from 'object-assign'
import {Promise} from 'es6-promise'
import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function(config) {
  if (config.method === 'post' || config.method === 'put') {
    config.data = qs.stringify(config.data)
  }

  if (config.url.match(/\.json$/) === null) {
    config.url = '/cgi' + config.url;
  }

  return config;
}, function(error) {
  return Promise.reject(error);
});

export default store => next => action => {
  var {
      type,
      url = '',
      mockUrl = '',
      method = 'GET',
      params = {},
      data = {}
  } = action;

  if (url === '') {// 普通 action：传递
    return next(action);
  }

  next(objectAssign({}, data, {type: 'REQUEST'}));

  return axios({url: url, data: data, params: params, method: method})
      .then(function(res) {
        next(objectAssign({}, {meta: data}, {type: type, payload: res.data}));
        next(objectAssign({}, {meta: data}, {type: 'RESPONSE', payload: res.data}));
      }).catch(function(error) {

        switch (error.response.status) {
          case 401:
            if (typeof window !== 'undefined') {
              console.log('401'); // window.location.href = '...'
              return;
            }
            break;
          case 404:
            console.log('Not Found');// window.location.href = '...'
            break;
          case 500:
            if (typeof error.response.data.errCode !== 'undefined' && typeof error.response.data.message !== 'undefined') {
              console.log(error.response.data.message);
            }
            break;
          default:
            break;
        }
        next(objectAssign({}, {meta: data}, {error: true, type: 'FAILURE', payload: error.response.data}));
        next(objectAssign({}, {meta: data}, {type: 'RESPONSE'}));
      });
};
