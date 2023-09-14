// ShoppingCart.jsx
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions';
import Layout from '../LayoutComp/Layout';

function ShoppingCart({ cartItems, removeFromCart }) {
  useEffect(() => {
    // Ensure the cartItems in session storage and the Redux store are in sync
    if (JSON.stringify(cartItems) !== sessionStorage.getItem('cartItems')) {
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <Layout>
      <div className='menu'>
        <div className='header'>
          <h1>YOUR CART</h1>
        </div>
        <div className='Checkout'>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <CartItemList cartItems={cartItems} removeFromCart={removeFromCart} />
          )}
        </div>
      </div>
    </Layout>
  );
}

// Extracted CartItemList component
function CartItemList({ cartItems, removeFromCart }) {
  return (
    <div className="checkout-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
}

// Extracted CartItem component
function CartItem({ item, removeFromCart }) {
  return (
    <div className="checkout-item">
      <span>{item.name}</span>
      <span>Quantity: {item.quantity}</span>
      <span>Price: ${item.price.toFixed(2)}</span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);
