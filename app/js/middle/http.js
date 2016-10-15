var $ = require('jquery'); // 可以更换为其他库
import objectAssign from 'object-assign';

export default store => next => action => {
  var {
      type,
      url = '',
      mockUrl = '',
      method = 'GET',
      dataType = 'json',
      data = {}
  } = action;

  if (url === '') {// 普通 action：传递
    return next(action);
  }

  // if (
  //     !Array.isArray(types) ||
  //     types.length !== 3 || !types.every(type => typeof type === 'string')
  // ) {
  //   throw new Error('Expected an array of three string types.');
  // }

  next(objectAssign({}, data, {type: 'REQUEST'}));

  url = '/cgi' + url;

  return $.ajax({url: url, data: data, dataType: dataType, type: method})
      .done(function(res, status, jqXHR) {
        if (res.state === 'redirect') {
          location.href = res.url;
          return;
        }
        next(objectAssign({}, {meta: data}, {type: type, payload: res}));
      })
      .fail(function(res) {
        next(objectAssign({}, {meta: data}, {error: true, type: 'FAILURE', payload: res}));
      }).always(function(res) {
        next(objectAssign({}, {meta: data}, {type: 'RESPONE', payload: res}));
      });
};
