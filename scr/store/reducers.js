import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from './types';

const initailState = {
  cart: [],
  cartTotal: 0,
  currencyTotal: 0,
};

export default (state = initailState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const food = action.payload;
      const {id} = action.payload;
      const existed_item = state.cart.find(food => id === food.id);
      if (existed_item) {
        existed_item.quantity += 1;
        return {
          ...state,
          cartTotal: state.cartTotal + Number(existed_item.price),
          //   currencyTotal: state.currencyTotal + existed_item.face_value_range_to,
        };
      }
      card.quantity = 1;
      return {
        ...state,
        cart: [...state.cart, card],
        cartTotal: state.cartTotal + Number(existed_item.price),
        // currencyTotal: state.currencyTotal + card.face_value_range_to,
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
          cartTotal: state.cartTotal - Number(existed_item.price),
          //   currencyTotal: state.currencyTotal - itemToRemove.face_value_range_to,
        };
      }
      return {
        ...state,
        cart: new_items,
        cartTotal: state.cartTotal - Number(existed_item.price),
        // currencyTotal: state.currencyTotal - Number(existed_item.price),
      };
    }
    default:
      return state;
  }
};
