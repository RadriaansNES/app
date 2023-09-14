import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../LayoutComp/Layout';
import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils'; // Import the utility function

function Classics({ addToCart }) {
    const [alertMessage, setAlertMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);

    const handleAddToCart = (item) => {
        addItemToCart(addToCart, setAlertMessage, item); // Pass the item directly to the utility function
        closeModal();
    };

    const pizzaOptions = [
        {
            id: 0,
            name: 'Deluxe',
            cdescrip: 'Pepperoni, Bacon, Mushrooms, Green Peppers & Onions',
            price: 12.99,
        },
        {
            id: 1,
            name: 'Truly Canadian',
            cdescrip: 'Mozzarella and Cheddar Cheese, Pepperoni, Bacon & Mushrooms',
            price: 11.99,
        },
        {
            id: 2,
            name: 'Big Meat',
            cdescrip: 'Pepperoni, Bacon, Sausage, Ham & Ground Beef',
            price: 13.99,
        },
        {
            id: 3,
            name: 'Vegetarian',
            cdescrip: 'Mushrooms, Green Peppers, Onions, Tomatoes & Green Olives',
            price: 10.99,
        },
        {
            id: 4,
            name: 'Hawaiian',
            cdescrip: 'Ham, Pineapple & Extra Cheese',
            price: 11.99,
        },
        {
            id: 5,
            name: 'Chicken Bacon Ranch',
            cdescrip: 'Ranch Base, Cheeseblend, Grilled Chicken Strips, Bacon & Parm to Finish',
            price: 14.99,
        },
    ];

    const openModal = (pizza) => {
        setSelectedPizza(pizza);
        setShowModal(true);
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
                        <div className='size-option'>
                            <label>
                                <p>Small</p>
                                <input type="radio" name="pizzaSize" value="small" />
                            </label>
                        </div>
                        <div className='size-option'>
                            <label>
                                <p>Medium</p>
                                <input type="radio" name="pizzaSize" value="medium" />
                            </label>
                        </div>
                        <div className='size-option'>
                            <label>
                                <p>Large</p>
                                <input type="radio" name="pizzaSize" value="large" />
                            </label>
                        </div>
                        <div className='size-option'>
                            <label>
                                <p>Extra Large</p>
                                <input type="radio" name="pizzaSize" value="extra-large" />
                            </label>
                        </div>
                    </form>
                    <p>Price: ${selectedPizza.price.toFixed(2)}</p>
                    <button onClick={() => handleAddToCart(selectedPizza)}>Add to Cart</button>
                    <button onClick={closeModal}>Close</button>
                </div>
            )}

        </Layout>
    );
}

export default connect(null, { addToCart })(Classics);