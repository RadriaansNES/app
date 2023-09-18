import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../LayoutComp/Layout';
import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils';

function Beverages({ addToCart }) {
    const [alertMessage, setAlertMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [selectedSize, setSelectedSize] = useState('One');

    const prices = {
        'Coke': {
            'One': 1.59,
            'Four': 5.25,
            'Six': 7.45,
            '2 Litre': 3.75
        },
        'C Plus Orange': {
            'One': 1.59,
            'Four': 5.25,
            'Six': 7.45
        },
        'Sprite': {
            'One': 1.59,
            'Four': 5.25,
            'Six': 7.45,
            '2 Litre': 3.75
        },
        'Diet Coke': {
            'One': 1.59,
            'Four': 5.25,
            'Six': 7.45,
            '2 Litre': 3.75
        },
        'Giner Ale': {
            'One': 1.59,
            'Four': 5.25,
            'Six': 7.45,
            '2 Litre': 3.75
        },
        'A&W Root Beer': {
            'One': 1.59,
            'Four': 5.25,
            'Six': 7.45,
            '2 Litre': 3.75
        },
        'Coke Zero': {
            'One': 1.59,
            'Four': 5.25,
            'Six': 7.45
        },
        'Nestea': {
            'One': 1.59,
            'Four': 5.25,
            'Six': 7.45
        },
        'Dasani Water': {
            'One': 1.99
        },
    };

    const pizzaOptions = [
        {
            id: 0,
            name: 'Coke',
            cdescrip: '',
        },
        {
            id: 1,
            name: 'C Plus Orange',
            cdescrip: '',
        },
        {
            id: 2,
            name: 'Sprite',
            cdescrip: '',
        },
        {
            id: 3,
            name: 'Diet Coke',
            cdescrip: '',
        },
        {
            id: 4,
            name: 'Ginger Ale',
            cdescrip: '',
        },
        {
            id: 5,
            name: 'A&W Root Beer',
            cdescrip: '',
        },
        {
            id: 6,
            name: 'Coke Zero',
            cdescrip: '',
        },
        {
            id: 7,
            name: 'Nestea',
            cdescrip: '',
        },
        {
            id: 8,
            name: 'Dasani Water',
            cdescrip: '',
        },
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
        setSelectedSize('One'); 
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedPizza(null);
    };

    return (
        <Layout alertMessage={alertMessage} setAlertMessage={setAlertMessage}>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>BEVERAGES</h1>
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

export default connect(null, { addToCart })(Beverages);
