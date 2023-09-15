import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../LayoutComp/Layout';
import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils'; 

function SuperSpecialties({ addToCart }) {
    const [alertMessage, setAlertMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [selectedSize, setSelectedSize] = useState('small'); 

    const basePrice = {
        small: 18.25,
        medium: 21.75,
        large: 27.00,
        'extra-large': 34.00,
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
            name: 'Superior',
            cdescrip: 'Pepperoni, Bacon, Mushrooms, Green Peppers, Onions, Ham, Sausage & Extra Cheese',
        },
        {
            id: 1,
            name: 'Chicken Santa Fe',
            cdescrip: 'Salsa Sauce, Mozzarella, Ground Beef, Chicken, Green Peppers, Cheddar Cheese, Tex-Mex Seasoning & Bacon',
        },
        {
            id: 2,
            name: 'Bacon Double Cheeseburger',
            cdescrip: 'Double Cheddar, Double Ground Beef & Double Bacon',
        }
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
                    <h1 id='SS'>SUPER SPECIALTY PIZZAS</h1>
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

export default connect(null, { addToCart })(SuperSpecialties);
