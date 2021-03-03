import {combineReducers} from 'redux';
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  FINISHED_ONBOARDING,
  ActionDispatchTypes,
} from './actionTypes';
import {data} from '../types';

interface defaultState {
  cart: data[];
  cartTotal: number;
  currencyTotal: number;
  finshedOnboarding: boolean;
}

const initailState: defaultState = {
  cart: [],
  cartTotal: 0,
  currencyTotal: 0,
  finshedOnboarding: false,
};

const Reducers = (state = initailState, action: ActionDispatchTypes) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const food = action.payload;
      const {id} = action.payload;
      const existed_item = state.cart.find(food => id === food.id);
      if (existed_item) {
        existed_item.quantity = existed_item?.quantity + 1;
        return {
          ...state,
          cartTotal: state.cartTotal + Number(existed_item.price),
        };
      }
      food.quantity = 1;
      return {
        ...state,
        cart: [...state.cart, food],
        cartTotal: state.cartTotal + Number(food.price),
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      const {id} = action.payload;
      const itemToRemove = state.cart.find(item => id === item.id);
      const new_items = state.cart.filter(item => id !== item.id);
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity -= 1;
        return {
          ...state,
          cartTotal: state.cartTotal - Number(itemToRemove?.price),
        };
      }
      return {
        ...state,
        cart: new_items,
        cartTotal: state.cartTotal - Number(itemToRemove?.price),
      };
    }
    case FINISHED_ONBOARDING: {
      return {
        ...state,
        finshedOnboarding: action.payload,
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({appReducer: Reducers});

export type RootState = ReturnType<typeof rootReducer>;
