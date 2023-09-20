import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  cartItems: JSON.parse(sessionStorage.getItem('cartItems')) || [],
  isFirstPizza: true,
  comboDetails: null, // Initialize comboDetails as null
  // ... other existing state properties
};

const findItemIndex = (cartItems, item) =>
  cartItems.findIndex(
    (cartItem) => cartItem.id === item.id && cartItem.name === item.name
  );

  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const itemToAdd = action.payload.item;
        const existingItemIndex = findItemIndex(state.cartItems, itemToAdd);
  
        if (existingItemIndex !== -1) {
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[existingItemIndex].quantity += 1;
          updatedCartItems[existingItemIndex].description = itemToAdd.description;
  
          sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
          return {
            ...state,
            cartItems: updatedCartItems,
            isFirstPizza: action.payload.isFirstPizza, // Update isFirstPizza
            comboDetails: action.payload.comboDetails, // Update comboDetails
          };
        } else {
          const updatedCartItemsAdd = [...state.cartItems, itemToAdd];
          sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItemsAdd));
          return {
            ...state,
            cartItems: updatedCartItemsAdd,
            isFirstPizza: action.payload.isFirstPizza, // Update isFirstPizza
            comboDetails: action.payload.comboDetails, // Update comboDetails
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