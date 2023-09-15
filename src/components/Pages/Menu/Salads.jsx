import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../LayoutComp/Layout';
import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils'; 

function Salads({ addToCart }) {
    const [alertMessage, setAlertMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [selectedSize, setSelectedSize] = useState('small'); 

    const basePrice = {
        small: 16.75,
        medium: 20.00,
        large: 25.00,
        'extra-large': 31.50,
    };

    const calculatePrice = (name, size) => {
       
        return basePrice[size];
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
            name: 'BBQ Chicken',
            cdescrip: 'BBQ Sauce Base, Chicken, Cheddar Cheese, Red Onions & Bacon',
        },
        {
            id: 1,
            name: 'Greek',
            cdescrip: 'Black Olives, Red Onions, Tomatoes, Green Peppers & Feta Cheese',
        },
        {
            id: 2,
            name: 'Great Lakes Classic',
            cdescrip: 'Extra Cheese on Bottom, Triple Pepperoni on Top!',
        },
        {
            id: 3,
            name: 'Chicken Parmesan',
            cdescrip: 'Mozzarella Cheese, Parmesan Cheese, Grilled Chicken, Red Onions & Italian Spices',
        },
        {
            id: 4,
            name: 'Spicy Italian',
            cdescrip: 'Asiago Cheese, Pepperoni, Ground Beef, Sausage & Italian Spices',
        },
        {
            id: 5,
            name: 'Hot Shot',
            cdescrip: 'Pepperoni, Onions, Hot Peppers, Sausage & Bacon',
        },
        {
            id: 6,
            name: 'Mexican',
            cdescrip: 'Mexican Beef, Extra Cheddar, Salsa Sauce, Red Onions & Tomatoes',
        },
        {
            id: 7,
            name: 'Chicken Bruschetta',
            cdescrip: 'Garlic Butter Base, Mozzarella, Grilled Chicken Strips, Tomatoes, Red Onion, Parm & Italian Spices to Finish',
        },
    ];

    const openModal = (pizza) => {
        setSelectedPizza(pizza);
        setShowModal(true);
        setSelectedSize('small'); 
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

export default connect(null, { addToCart })(Salads);
