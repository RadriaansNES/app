import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions';
import Layout from '../LayoutComp/Layout';

function ShoppingCart({ cartItems, removeFromCart }) {
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
    <ul>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
    </ul>
  );
}

// Extracted CartItem component
function CartItem({ item, removeFromCart }) {
  return (
    <li>
      <span>{item.name}</span>
      <span>Quantity: {item.quantity}</span>
      <span>Price: ${item.price.toFixed(2)}</span>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);
