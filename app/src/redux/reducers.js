import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, LOGIN, LOGOUT, SET_AUTHENTICATION_STATUS } from './actions';

const initialState = {
  cartItems: JSON.parse(sessionStorage.getItem('cartItems')) || [],
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true', // Retrieve from local storage
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
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        updatedCartItems[existingItemIndex].description = itemToAdd.description;

        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        const updatedCartItemsAdd = [...state.cartItems, itemToAdd];
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItemsAdd));
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
      );
      return {
        ...state,
        cartItems: updatedCartItemsRemove,
      };

    default:
      return state;
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('isAuthenticated', 'true'); // Store in local storage
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload, // Store the user's information in the state
      };


    case LOGOUT:
      localStorage.setItem('isAuthenticated', 'false'); // Store in local storage
      return {
        ...state,
        isAuthenticated: false,
      };

    case SET_AUTHENTICATION_STATUS:
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
