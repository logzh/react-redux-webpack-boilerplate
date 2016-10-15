import {Types} from '../../constants/base/user';

export function fetchUser() {
  return {
    url: '/user/info',
    method: 'GET',
    type: Types.LOGIN_USER
  };
}
