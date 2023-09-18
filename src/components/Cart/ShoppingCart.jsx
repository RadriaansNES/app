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

function extractSizeFromName(name) {
  const sizePattern = /(Small|Medium|Large|Extra Large)/i;
  const match = name.match(sizePattern);
  return match ? match[0].toLowerCase() : null;
}

function CartItemList({ cartItems, removeFromCart }) {
  const sizeCounts = {};

  cartItems.forEach((item) => {
    const size = extractSizeFromName(item.name);
    if (size) {
      if (sizeCounts[size]) {
        sizeCounts[size] += item.quantity;
      } else {
        sizeCounts[size] = item.quantity;
      }
    }
  });

  let discount = 0;

  if (sizeCounts['small'] >= 2) {
    discount += 2.0;
  }
  if (sizeCounts['medium'] >= 2) {
    discount += 3.0;
  }
  if (sizeCounts['large'] >= 2) {
    discount += 4.0;
  }
  if (sizeCounts['extra large'] >= 2) {
    discount += 5.0;
  }

  const subtotalWithoutDiscount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const subtotal = subtotalWithoutDiscount - discount;

  return (
    <div className="checkout-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <div>
        {discount > 0 && (
          <p>Your discount is: ${discount.toFixed(2)}</p>
        )}
        <strong>Your subtotal is : ${subtotal.toFixed(2)}</strong>
        <br />
        <button id='checkB'>Checkout</button>
      </div>
    </div>
  );
}

// Extracted CartItem component
function CartItem({ item, removeFromCart }) {
  return (
    <div className="checkout-item">
      <div className="cell-a">
        <p><strong>{item.name}</strong></p>
      </div>
      <div className="cell-b r">
        <p>Qty:</p>
      </div>
      <div className="cell-c r">
        <p>{item.quantity}</p>
      </div>
      <div className="cell-d">
        <p>{item.description}</p>
      </div>
      <div className="cell-r">
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
      <div className="cell-e r">
        <p><strong>${item.price * item.quantity}</strong></p>
      </div>
      <div className="cell-n">
        <p>{ }</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);
