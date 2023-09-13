import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/actions'; // Import the addToCart action
import Layout from '../../LayoutComp/Layout';

function WhatsNew({ addToCart }) {
  // Define an array of combo objects with details
  const combos = [
    {
      id: 0,
      name: 'Special Combo',
      description: (
        <div>
          2 Medium Pizzas
          <br />
          6 Toppings combined
        </div>
      ),
      price: 26.99,
    },
    {
      id: 1,
      name: 'COMBO 1',
      description: (
        <div>
          2 Small Pizzas
          <br />
          6 Toppings combined
        </div>
      ),
      price: 21.99,
    },
    {
      id: 2,
      name: 'COMBO 2',
      description: (
        <div>
          1 Medium Classic Pizza
        </div>
      ),
      price: 17.49,
    },
    {
      id: 3,
      name: 'COMBO 3',
      description: (
        <div>
          1 Large Pizza
          <br />
          1 Topping
          <br />
          Pick-up Only
        </div>
      ),
      price: 11.99,
    },
    {
      id: 4,
      name: 'COMBO 4',
      description: (
        <div>
          1 Large Pizza
          <br />
          3 Toppings
          <br />
          4 pack of Coke
        </div>
      ),
      price: 23.99,
    },
    {
      id: 5,
      name: 'COMBO 5',
      description: (
        <div>
          1 Extra Large Pizza
          <br />
          3 Toppings
        </div>
      ),
      price: 22.99,
    },
    {
      id: 6,
      name: 'COMBO 6',
      description: (
        <div>
          2 Large Pizzas
          <br />
          6 Toppings combined
        </div>
      ),
      price: 21.99,
    },
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
        <div className='mainCombo' onClick={() => handleAddToCart(combos[0])}>
          <p className='maininfo'>2 Medium Pizzas<br />6 Toppings combined</p>
          <p className='mainprice'>Only<br /><span>$26.99</span><em><br />+tax</em></p>
        </div>
        <div className='combos'>
          {combos.slice(1).map((combo) => (
            <div
              className='combocell'
              key={combo.id}
              onClick={() => handleAddToCart(combo)}
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