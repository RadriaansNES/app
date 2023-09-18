import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../LayoutComp/Layout';
import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils';

function SideOrders({ addToCart }) {
  const [alertMessage, setAlertMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedSize, setSelectedSize] = useState('Regular');

  const prices = {
    'Breadsticks': 5.00,
    'Cheesesticks': 8.95,
    'Wings (10)': 11.95,
    'Garlic Bread': {
      'Regular': 5.50,
      'With Cheese': 6.50,
      'With Cheese and Bacon': 7.00,
    }
  };

  const calculatePrice = (name, size) => {
    const flatPrices = {
      'Breadsticks': 5.00,
      'Cheesesticks': 8.95,
      'Wings (10)': 11.95,
    };

    if (name in flatPrices) {
      return flatPrices[name];
    } else if (name === 'Garlic Bread') {
      if (size in prices['Garlic Bread']) {
        return prices['Garlic Bread'][size];
      }
    }

    return 0;
  };

  const handleAddToCart = (item, size) => {
    const pizzaNameWithSize = `${size} ${item.name}`;
    const price = calculatePrice(item.name, size);
    addItemToCart(addToCart, setAlertMessage, { ...item, name: pizzaNameWithSize, price });
    closeModal();
  };

  const pizzaOptions = [
    {
      id: 0,
      name: 'Breadsticks',
      cdescrip: '',
    },
    {
      id: 1,
      name: 'Cheesesticks',
      cdescrip: '',
    },
    {
      id: 2,
      name: 'Wings (10)',
      cdescrip: '',
    },
    {
      id: 3,
      name: 'Garlic Bread',
      cdescrip: '',
    }
  ];

  const openModal = (pizza) => {
    setSelectedPizza(pizza);
    setShowModal(true);
    setSelectedSize('Regular');
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
  };

  return (
    <Layout alertMessage={alertMessage} setAlertMessage={setAlertMessage}>
      <div className='menu'>
        <div className='header' id='ClassicsZa'>
          <h1>SIDE ORDERS</h1>
        </div>
        <div className='PizzaTypes'>
          {pizzaOptions.map((pizza) => (
            <div key={pizza.id} onClick={() => openModal(pizza)}>
              <h2>{pizza.name}</h2>
              <p>{pizza.cdescrip}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedPizza && (
        <div className='modal'>
          <h2>{selectedPizza.name}</h2>
          <p>{selectedPizza.cdescrip}</p>
          {selectedPizza.name === 'Garlic Bread' && (
            <div className='size-form'>
              {Object.keys(prices['Garlic Bread']).map((size) => (
                <div className='size-option'>
                  <label key={size}>
                    <p>{size}</p>
                    <input
                      type="radio"
                      name="pizzaSize"
                      value={size}
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(size)}
                    />
                  </label>
                </div>
              ))}
            </div>
          )}
          <p>Price: ${calculatePrice(selectedPizza.name, selectedSize).toFixed(2)}</p>
          <div id='modalButtons'>
            <button onClick={() => handleAddToCart(selectedPizza, selectedSize)}>Add to Cart</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default connect(null, { addToCart })(SideOrders);
