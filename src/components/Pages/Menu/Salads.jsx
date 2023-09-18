import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../LayoutComp/Layout';
import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils';

function Salads({ addToCart }) {
    const [alertMessage, setAlertMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [selectedSize, setSelectedSize] = useState('Regular');

    const prices = {
        'Greek Salad': {
            'Small': 7.25,
            'Large': 9.95,
            'Small with chicken': 10.25,
            'Large with chicken': 13.95
        },
        'Ceaser Salad': {
            'Small': 7.00,
            'Large': 8.95,
            'Small with chicken': 10.00,
            'Large with chicken': 12.95
        }
    };

    const pizzaOptions = [
        {
            id: 0,
            name: 'Greek Salad',
            cdescrip: '',
        },
        {
            id: 1,
            name: 'Ceaser Salad',
            cdescrip: '',
        }
    ];

    const calculatePrice = (name, size) => {
        if (name in prices) {
            if (size in prices[name]) {
                return prices[name][size];
            }
        }
        // Handle any other cases or invalid inputs here
        return 0;
    };

    const handleAddToCart = (item, size) => {
        const pizzaNameWithSize = `${size.charAt(0).toUpperCase() + size.slice(1)} ${item.name}`;
        const price = calculatePrice(item.name, size);
        addItemToCart(addToCart, setAlertMessage, { ...item, name: pizzaNameWithSize, price });
        closeModal();
    };

    const openModal = (salad) => {
        setSelectedPizza(salad);
        setShowModal(true);
        setSelectedSize('Small'); 
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedPizza(null);
    };

    return (
        <Layout alertMessage={alertMessage} setAlertMessage={setAlertMessage}>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>SALADS</h1>
                </div>
                <div className='PizzaTypes'>
                    {pizzaOptions.map((salad) => (
                        <div key={salad.id} onClick={() => openModal(salad)}>
                            <h2>{salad.name}</h2>
                            <p>{salad.cdescrip}</p>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && selectedPizza && (
                <div className='modal'>
                    <h2>{selectedPizza.name}</h2>
                    <p>{selectedPizza.cdescrip}</p>
                    <div className='size-form'>
                        {Object.keys(prices[selectedPizza.name]).map((size) => (
                            <div className='size-option' key={size}>
                                <label>
                                    <p>{size}</p>
                                    <input
                                        type="radio"
                                        name="saladSize"
                                        value={size}
                                        checked={selectedSize === size}
                                        onChange={() => setSelectedSize(size)}
                                    />
                                </label>
                            </div>
                        ))}
                    </div>
                    <p>Price: ${calculatePrice(selectedPizza.name, selectedSize).toFixed(2)}</p>
                    <button onClick={() => handleAddToCart(selectedPizza, selectedSize)}>Add to Cart</button>
                    <button onClick={closeModal}>Close</button>
                </div>
            )}
        </Layout>
    );
}

export default connect(null, { addToCart })(Salads);
