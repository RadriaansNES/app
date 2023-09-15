import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../LayoutComp/Layout';

import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils';

function WhatsNew({ addToCart }) {
  const [alertMessage, setAlertMessage] = useState('');

  const handleAddToCart = (combo) => {
    addItemToCart(addToCart, setAlertMessage, combo);
  };

  const combos = [
    {
      id: 0,
      name: 'Special Combo',
      cdescrip: '2 Medium pizzas, 6 toppings',
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
      cdescrip: '2 Small pizzas, 6 toppings',
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
      cdescrip: '1 Medium classic pizza',
      description: (
        <div>
          1 Medium <br/> Classic Pizza
        </div>
      ),
      price: 17.49,
    },
    {
      id: 3,
      name: 'COMBO 3',
      cdescrip: '1 Large pizza, 1 topping',
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
      cdescrip: '1 Large pizza, 3 toppings, 4 pack of Coke',
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
      cdescrip: '1 Extra large pizza, 3 toppings',
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
      cdescrip: '2 Large pizzas, 6 toppings',
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

  return (
    <Layout alertMessage={alertMessage} setAlertMessage={setAlertMessage}>
      <div className='header'>
        <h1>
          <button>START YOUR ORDER</button></h1>
      </div>
      <div className='main'>
        <div className='mainCombo'>
          <p className='maininfo' onClick={() => handleAddToCart(combos[0])}>2 Medium Pizzas<br />6 Toppings combined</p>
          <p className='mainprice' onClick={() => handleAddToCart(combos[0])}>Only<br /><span>$26.99</span><em><br />+tax</em></p>
        </div>
        <div className='combos'>
          {combos.slice(1).map((combo) => (
            <div
              className='combocell'
              key={combo.id}
            >
              <Link to={`/combo/${combo.id}`}> {/* Add this Link component */}
                <h4>{combo.name}</h4>
                <p>{combo.description}</p>
                <p className='price'>${combo.price.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default connect(null, { addToCart })(WhatsNew);