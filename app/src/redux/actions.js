export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_AUTHENTICATION_STATUS = 'SET_AUTHENTICATION_STATUS';

const generateUniqueID = () => {
  return Math.floor(Math.random() * 10000);
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

export const login = (user) => ({
  type: LOGIN,
  payload: user, 
});

export const logout = () => ({
  type: LOGOUT,
});

export const setAuthenticationStatus = (status) => ({
  type: SET_AUTHENTICATION_STATUS,
  payload: status,
});
