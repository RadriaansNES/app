import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../LayoutComp/Layout';
import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils';
import bread from '../../../imgs/bread.jpg';
import cheese from '../../../imgs/cheese.jpg';
import F from '../../../imgs/F.jpg';
import garlic from '../../../imgs/garlic.jpg';

function SideOrders({ addToCart }) {
    const [alertMessage, setAlertMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [selectedSize, setSelectedSize] = useState('Regular');

    const prices = {
        'Breadsticks': {
            'Regular': 5.00
        },
        'Cheesesticks': {
            'Regular': 8.95
        },
        'Wings (10)': {
            'Regular': 11.95
        },
        'Garlic Bread': {
            'Regular': 5.50,
            'Cheese': 6.50,
            'Cheese & Bacon': 7.00
        },
    };

    const pizzaOptions = [
        {
            id: 0,
            name: 'Breadsticks',
            cdescrip: '',
            image: bread
        },
        {
            id: 1,
            name: 'Cheesesticks',
            cdescrip: '',
            image: cheese
        },
        {
            id: 2,
            name: 'Wings (10)',
            cdescrip: '',
            image: F
        },
        {
            id: 3,
            name: 'Garlic Bread',
            cdescrip: '',
            image: garlic
        }
    ];

    const calculatePrice = (name, size) => {
        if (name in prices) {
            if (size in prices[name]) {
                return prices[name][size];
            }
        }

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
                    {pizzaOptions.map((salad) => (
                        <div key={salad.id} onClick={() => openModal(salad)}>
                            <h2>{salad.name}</h2>
                            <img src={salad.image} alt={salad.name} /> {/* Display the pizza image */}
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
