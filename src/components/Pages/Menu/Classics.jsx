import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../LayoutComp/Layout';
import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils'; // Import the utility function

function Classics({ addToCart }) {
    const [alertMessage, setAlertMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [selectedSize, setSelectedSize] = useState('small'); // Initialize with 'small'

    const basePrice = {
        small: 16.75,
        medium: 20.00,
        large: 25.00,
        'extra-large': 31.50,
    };

    const calculatePrice = (name, size) => {
        // Calculate the price based on the pizza's name and size
        return basePrice[size];
    };

    const handleAddToCart = (item, size) => {
        const pizzaNameWithSize = `${size.charAt(0).toUpperCase() + size.slice(1)} ${item.name}`;
        const price = calculatePrice(pizzaNameWithSize, size); // Calculate the price
        addItemToCart(addToCart, setAlertMessage, { ...item, name: pizzaNameWithSize, price }); // Pass the item with modified name and calculated price
        closeModal();
    };

    const pizzaOptions = [
        {
            id: 0,
            name: 'Deluxe',
            cdescrip: 'Pepperoni, Bacon, Mushrooms, Green Peppers & Onions',
        },
        {
            id: 1,
            name: 'Truly Canadian',
            cdescrip: 'Mozzarella and Cheddar Cheese, Pepperoni, Bacon & Mushrooms',
        },
        {
            id: 2,
            name: 'Big Meat',
            cdescrip: 'Pepperoni, Bacon, Sausage, Ham & Ground Beef',
        },
        {
            id: 3,
            name: 'Vegetarian',
            cdescrip: 'Mushrooms, Green Peppers, Onions, Tomatoes & Green Olives',
        },
        {
            id: 4,
            name: 'Hawaiian',
            cdescrip: 'Ham, Pineapple & Extra Cheese',
        },
        {
            id: 5,
            name: 'Chicken Bacon Ranch',
            cdescrip: 'Ranch Base, Cheeseblend, Grilled Chicken Strips, Bacon & Parm to Finish',
        },
    ];

    const openModal = (pizza) => {
        setSelectedPizza(pizza);
        setShowModal(true);
        setSelectedSize('small'); // Reset selected size when opening the modal
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedPizza(null);
    };

    return (
        <Layout alertMessage={alertMessage} setAlertMessage={setAlertMessage}>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>CLASSIC PIZZAS</h1>
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
                    <button onClick={() => handleAddToCart(selectedPizza, selectedSize)}>Add to Cart</button>
                    <button onClick={closeModal}>Close</button>
                </div>
            )}
        </Layout>
    );
}

export default connect(null, { addToCart })(Classics);
