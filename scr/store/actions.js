import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  FINISHED_ONBOARDING,
} from './types';

export const addItemToCart = item => dispatch => {
  dispatch({type: ADD_ITEM_TO_CART, payload: item});
};

export const removeFromCart = item => dispatch => {
  dispatch({type: REMOVE_ITEM_FROM_CART, payload: item});
};
export const finishedOnboarding = value => dispatch => {
  dispatch({type: FINISHED_ONBOARDING, payload: value});
};
