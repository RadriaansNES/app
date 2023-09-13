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
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>Quantity: {item.quantity}</span>
                  <span>Price: ${item.price.toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);
