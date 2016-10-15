import {combineReducers} from 'redux';
import objectAssign from 'object-assign';
import {Types} from '../constants/cart';
import {user, loading} from './base/user';

export function carts(state = [], action) {
  switch (action.type) {
    case Types.GET_SERVER_CARTS:
      state = action.payload;
      break;

    case Types.ADD_SERVER_CART:
      state = action.payload;
      break;

    case Types.CART_INC_COUNT:
      state = state.map(item =>
          item.sizeId == action.meta.sizeId ?
              objectAssign({}, item, {count: item.count + 1}) :
              item
      );
      break;

    case Types.CART_DES_COUNT:
      state = state.map(item =>
          (item.sizeId == action.meta.sizeId && item.count > 1) ?
              objectAssign({}, item, {count: item.count - 1}) :
              item
      );
      break;

    case Types.CART_UPDATE_COUNT:
      state = state.map(item =>
          (item.sizeId == action.meta.sizeId && action.meta.count > 0) ?
              objectAssign({}, item, {count: action.meta.count}) :
              item
      );
      break;

    case Types.CART_DEL_ITEM:
      state = state.filter(item => item.sizeId !== action.meta.sizeId);
      break;

    default:
      break;
  }

  return state;
}

export function isShow(state = false, action) {
  switch (action.type) {
    case Types.SWITCH_PANEL:
      state = !state; //action.payload;
      break;

    default:
      break;
  }

  return state;
}


const rootReducer = combineReducers({
  user,
  loading,
  carts,
  isShow
});

export default rootReducer;
