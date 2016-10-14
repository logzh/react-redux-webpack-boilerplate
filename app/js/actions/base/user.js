import {Types} from '../../constants/base/user';

export function fetchUser() {
  return {
    url: '/user/info',
    method: 'GET',
    types: ['REQUEST', Types.LOGIN_USER, 'FAILURE']
  };
}
