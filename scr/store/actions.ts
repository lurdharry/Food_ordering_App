import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  FINISHED_ONBOARDING,
  AddItem,
  RemoveItem,
  FinishOnboarding,
} from './actionTypes';
import {Dispatch} from 'redux';
import {data} from '../types';

export const addItemToCart = (item: data) => (dispatch: Dispatch<AddItem>) => {
  dispatch({type: ADD_ITEM_TO_CART, payload: item});
};

export const removeFromCart = (item: data) => (
  dispatch: Dispatch<RemoveItem>,
) => {
  dispatch({type: REMOVE_ITEM_FROM_CART, payload: item});
};

export const finishedOnboarding = (value: boolean) => (
  dispatch: Dispatch<FinishOnboarding>,
) => {
  dispatch({type: FINISHED_ONBOARDING, payload: value});
};
