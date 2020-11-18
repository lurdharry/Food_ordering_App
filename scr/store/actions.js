import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from './types';

export const addItemToCart = card => dispatch => {
  dispatch({type: ADD_ITEM_TO_CART, payload: card});
};

export const removeFromCart = card => dispatch => {
  dispatch({type: REMOVE_ITEM_FROM_CART, payload: card});
};
