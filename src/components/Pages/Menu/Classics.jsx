import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../LayoutComp/Layout';
import { addToCart } from '../../../redux/actions';
import { addItemToCart } from '../../Cart/cartUtils'; // Import the utility function

function Classics({ addToCart }) {
    const [alertMessage, setAlertMessage] = useState('');

    const handleAddToCart = (item) => {
        addItemToCart(addToCart, setAlertMessage, item); // Pass the item directly to the utility function
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

    return (
        <Layout alertMessage={alertMessage} setAlertMessage={setAlertMessage}>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>CLASSIC PIZZAS</h1>
                </div>
                <div className='PizzaTypes'>
                    {pizzaOptions.map((pizza) => (
                        <div key={pizza.id}>
                            <h2>{pizza.name}</h2>
                            <p>{pizza.cdescrip}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default connect(null, { addToCart })(Classics);