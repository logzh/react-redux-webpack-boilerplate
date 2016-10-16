import {Types} from '../../constants/base/user';

import objectAssign from 'object-assign';

export function user(state = {isLoginEd: false}, action) {
  switch (action.type) {
    case Types.LOGIN_USER:
      return objectAssign({}, {isLoginEd: true}, action.payload);

    default:
      return state;
  }
}

export function loading(state = 0, action) {
  switch (action.type) {
    case 'REQUEST':
      return state + 1;

    case 'RESPONSE':
      return state - 1;

    default:
      return state;
  }
}
