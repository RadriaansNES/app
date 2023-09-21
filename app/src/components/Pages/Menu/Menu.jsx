import React from 'react';
import Layout from '../../LayoutComp/Layout';
import { connect } from 'react-redux';

function Menu() {
  return (
    <Layout>
      <div className='menu'>
        <div className='header'>
          <h1>MENU</h1>
        </div>
        <div className='BYOP'>
          <div>
            <h3>Build Your Own Pizza</h3>
          </div>
          <div className='BYOP-Sizes'>
            <a href='/BYOPizza'>Small (11")</a>
            <a href='/BYOPizza'>Medium (13")</a>
            <a href='/BYOPizza'>Large (15")</a>
            <a href='/BYOPizza'>Extra Large (18")</a>
          </div>
        </div>
        <div className='Types'>
          <div>
            <a href='/ClassicPizzas'>
              <h2>Classics</h2>
              <p>Classic pizza img. </p>
            </a>
          </div>
          <div>
            <a href='/Specialties'>
              <h2>Specialties</h2>
              <p>Spec. img. </p>
            </a>
          </div>
          <div>
            <a href='/SuperSpecialties'>
              <h2>Super Specialties</h2>
              <p>Super spec. img. </p>
            </a>
          </div>
          <div>
            <a href='/Subs'>
              <h2>Subs</h2>
              <p>Subs img. </p>
            </a>
          </div>
          <div>
            <a href='/Salads'>
              <h2>Salads</h2>
              <p>Salad img. </p>
            </a>
          </div>
          <div>
            <a href='/Sides'>
              <h2>Sides</h2>
              <p>Sides img. </p>
            </a>
          </div>
          <div>
            <a href='/Beverages'>
              <h2>Beverages</h2>
              <p>Bev img. </p>
            </a>
          </div>
        </div>
        <div className='discounts'>
            <h2>Discounts</h2>
            <div>Order <strong>two small pizzas</strong>, recieve <strong>$2.00</strong> off your order</div>
            <div>Order <strong>two medium pizzas</strong>, recieve <strong>$3.00</strong> off your order</div>
            <div>Order <strong>two large pizzas</strong>, recieve <strong>$4.00</strong> off your order</div>
            <div>Order <strong>two extra large pizzas</strong>, recieve <strong>$5.00</strong> off your order</div>
          </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Menu);