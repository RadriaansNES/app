// rootReducer.js
import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  cartItems: JSON.parse(sessionStorage.getItem('cartItems')) || [], // Read from session storage
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCartItemsAdd = [...state.cartItems, action.payload];
      sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItemsAdd)); // Save to session storage
      return {
        ...state,
        cartItems: updatedCartItemsAdd,
      };
    case REMOVE_FROM_CART:
      const updatedCartItemsRemove = state.cartItems.filter((item) => item.id !== action.payload);
      sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItemsRemove)); // Save to session storage
      return {
        ...state,
        cartItems: updatedCartItemsRemove,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
