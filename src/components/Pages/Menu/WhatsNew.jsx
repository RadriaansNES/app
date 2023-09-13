import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/actions'; // Import the addToCart action
import Layout from '../../LayoutComp/Layout';

function WhatsNew({ addToCart }) {
  // Define an array of combo objects with details
  const combos = [
    {
      id: 1,
      name: 'COMBO 1',
      description: '2 Small Pizzas - 6 Toppings combined',
      price: 21.99,
    },
    // Define other combo objects here
  ];

  // Function to add a combo to the cart
  const handleAddToCart = (combo) => {
    addToCart({
      id: combo.id,
      name: combo.name,
      quantity: 1, // You can adjust this based on user input or logic
      price: combo.price,
    });
  };

  return (
    <Layout>
      <div className='header'>
        <h1>
          <button>START YOUR ORDER</button></h1>
      </div>
      <div className='main'>
        <div className='mainCombo'>
          <p className='maininfo'>2 Medium Pizzas<br />6 Toppings combined</p>
          <p className='mainprice'>Only<br /><span>$26.99</span><em><br />+tax</em></p>
        </div>
        <div className='combos'>
          {combos.map((combo) => (
            <div
              className='combocell'
              key={combo.id}
              onClick={() => handleAddToCart(combo)} // Clicking anywhere inside the div will trigger addToCart
            >
              <h4>{combo.name}</h4>
              <p>{combo.description}</p>
              <p className='price'>${combo.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default connect(null, { addToCart })(WhatsNew);