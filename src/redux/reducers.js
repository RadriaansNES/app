// rootReducer.js
import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  cartItems: JSON.parse(sessionStorage.getItem('cartItems')) || [], // Read from session storage
};

const findItemIndex = (cartItems, item) =>
  cartItems.findIndex(
    (cartItem) => cartItem.id === item.id && cartItem.name === item.name
  );

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemToAdd = action.payload;
      const existingItemIndex = findItemIndex(state.cartItems, itemToAdd);

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity and description
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        updatedCartItems[existingItemIndex].description = itemToAdd.description; // Update description

        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Save to sessionStorage
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If the item is not in the cart, add it
        const updatedCartItemsAdd = [...state.cartItems, itemToAdd];
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItemsAdd)); // Save to sessionStorage
        return {
          ...state,
          cartItems: updatedCartItemsAdd,
        };
      }


    case REMOVE_FROM_CART:
      const updatedCartItemsRemove = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      sessionStorage.setItem(
        'cartItems',
        JSON.stringify(updatedCartItemsRemove)
      ); // Save to session storage
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