export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const generateUniqueID = () => {
  return Math.floor(Math.random() * 10000); // Generate a random 4-digit number
};

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: {
    ...item,
    id: generateUniqueID(),
  },
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

