import {Types} from '../constants/cart';

export * from './base/user';

export function increaseCount(item) {
  var {id, sizeId, count} = item;

  return {
    url: `/mall/cart/${id}`,
    data: {count: count + 1, sizeId},
    method: 'PUT',
    types: ['REQUEST', Types.CART_INC_COUNT, 'FAILURE']
  };
}

export function decreaseCount(item) {
  var {id, sizeId, count} = item;

  return {
    url: `/mall/cart/${id}`,
    data: {count: count - 1, sizeId},
    method: 'PUT',
    types: ['REQUEST', Types.CART_DES_COUNT, 'FAILURE']
  };
}

export function updateCount(data) {
  var {id, sizeId, count} = data;

  return {
    url: `/mall/cart/${id}`,
    data: {count: count, sizeId},
    method: 'PUT',
    types: ['REQUEST', Types.CART_UPDATE_COUNT, 'FAILURE']
  };
}

export function deleteItem(item) {
  var {id, sizeId} = item;

  return {
    url: `/mall/cart/${id}`,
    data: {sizeId},
    method: 'DELETE',
    types: ['REQUEST', Types.CART_DEL_ITEM, 'FAILURE']
  };

}

export function fetchCart() {
  return {
    url: '/mall/cart',
    method: 'GET',
    types: ['REQUEST', Types.GET_SERVER_CARTS, 'FAILURE']
  };
}

export function addCart(goods) {
  var {sizeId, name, price, thumb, sizeName, regularPrice} = goods;

  return {
    url: '/mall/cart',
    method: 'POST',
    data: {goodsId: goods.id, sizeId},
    types: ['REQUEST', Types.ADD_SERVER_CART, 'FAILURE']
  };
}

export function switchPanel(payload) {
  return {type: Types.SWITCH_PANEL, payload};
}
