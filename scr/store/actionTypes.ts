import {data} from '../types';

export const ADD_ITEM_TO_CART = 'add_item_to_cart';
export const REMOVE_ITEM_FROM_CART = 'remove_item_from_cart';
export const FINISHED_ONBOARDING = 'finished_onboarding';

export interface AddItem {
  type: typeof ADD_ITEM_TO_CART;
  payload: data;
}

export interface RemoveItem {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: data;
}

export interface FinishOnboarding {
  type: typeof FINISHED_ONBOARDING;
  payload: boolean;
}

export type ActionDispatchTypes = AddItem | RemoveItem | FinishOnboarding;
