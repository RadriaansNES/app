import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../LayoutComp/Layout';

import { addToCart } from '../../../redux/actions';

function WhatsNew({ addToCart }) {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');

  const combos = [
    {
      id: 0,
      name: 'Special Combo',
      cdescrip: '2 Medium pizzas, 6 toppings',
      description: '2 Medium Pizzas\n6 Toppings combined',
      price: 26.99,
    },
    {
      id: 1,
      name: 'COMBO 1',
      cdescrip: '2 Small pizzas, 6 toppings',
      description: '2 Small Pizzas\n6 Toppings combined',
      price: 21.99,
    },
    {
      id: 2,
      name: 'COMBO 2',
      cdescrip: '1 Medium classic pizza',
      description: '1 Medium\nClassic Pizza',
      price: 17.49,
    },
    {
      id: 3,
      name: 'COMBO 3',
      cdescrip: '1 Large pizza, 1 topping',
      description: '1 Large Pizza\n1 Topping\nPick-up Only',
      price: 11.99,
    },
    {
      id: 4,
      name: 'COMBO 4',
      cdescrip: '1 Large pizza, 3 toppings, 4 pack of Coke',
      description: '1 Large Pizza\n3 Toppings\n4 pack of Coke',
      price: 23.99,
    },
    {
      id: 5,
      name: 'COMBO 5',
      cdescrip: '1 Extra large pizza, 3 toppings',
      description: '1 Extra Large Pizza\n3 Toppings',
      price: 22.99,
    },
    {
      id: 6,
      name: 'COMBO 6',
      cdescrip: '2 Large pizzas, 6 toppings',
      description: '2 Large Pizzas\n6 Toppings combined',
      price: 33.99,
    },
  ];

  const scrollToTopAndNavigate = (url) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(url);
  };

  return (
    <Layout alertMessage={alertMessage} setAlertMessage={setAlertMessage}>
      <div className='header'>
        <h1>
          <Link to="/menu">
            <button>START YOUR ORDER</button>
          </Link>
        </h1>
      </div>
      <div className='main'>
        <div className='warnMessage'>
          <h2>
            Please note this website was formatted AND styled in request to the client. 
          </h2>
        </div>
        <div className='mainCombo'>
          <p className='maininfo' onClick={() => scrollToTopAndNavigate('/combo/0')}>
            2 Medium Pizzas<br />6 Toppings combined
          </p>
          <p className='mainprice' onClick={() => scrollToTopAndNavigate('/combo/0')}>
            Only<br /><span>$26.99</span><em><br />+tax</em>
          </p>
        </div>
        <div className='combos'>
          {combos.slice(1).map((combo) => (
            <div className='combocell' key={combo.id}>
              <Link
                to={`/combo/${combo.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTopAndNavigate(`/combo/${combo.id}`);
                }}
              >
                <h4>{combo.name}</h4>
                {combo.description.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
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