import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../LayoutComp/Layout';
import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils';
import Meatball from '../../../imgs/meatball.jpg';
import pizza from '../../../imgs/pizza.jpg';

function Subs({ addToCart }) {
    const [alertMessage, setAlertMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [selectedSize, setSelectedSize] = useState('Regular');

    const basePrice = {
        Regular: 8.95,
    };

    const calculatePrice = (name, size) => {
        return 8.95;
    };

    const handleAddToCart = (item, size) => {
        const pizzaNameWithSize = `${size.charAt(0).toUpperCase() + size.slice(1)} ${item.name}`;
        const price = calculatePrice(pizzaNameWithSize, size);
        addItemToCart(addToCart, setAlertMessage, { ...item, name: pizzaNameWithSize, price });
        closeModal();
    };

    const pizzaOptions = [
        {
            id: 0,
            name: 'Meatball Sub',
            cdescrip: '',
            image: Meatball, // Add the imported image for Meatball Sub
        },
        {
            id: 1,
            name: 'Pizza Sub',
            cdescrip: '',
            image: pizza, // Add the imported image for Pizza Sub
        },
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
                    <h1>SUBS</h1>
                </div>
                <div className='PizzaTypes'>
                    {pizzaOptions.map((pizza) => (
                        <div key={pizza.id} onClick={() => openModal(pizza)}>
                            <h2>{pizza.name}</h2>
                            <img src={pizza.image} alt={pizza.name} /> {/* Display the pizza image */}
                            <p>{pizza.cdescrip}</p>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && selectedPizza && (
                <div className='modal'>
                    <h2>{selectedPizza.name}</h2>
                    <p>{selectedPizza.cdescrip}</p>
                    <form className='size-form'>
                        {Object.keys(basePrice).map((size) => (
                            <div className='size-option' key={size}>
                                <label>
                                    <p>{size.charAt(0).toUpperCase() + size.slice(1)}</p>
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
                    </form>
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

export default connect(null, { addToCart })(Subs);
