import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/actions';
import Layout from '../../LayoutComp/Layout';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ComboCustomization({ addToCart }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [combo, setCombo] = useState(null);
    const [currentPizza, setCurrentPizza] = useState(1);
    const [selectedMeats, setSelectedMeats] = useState([]);
    const [selectedCheeses, setSelectedCheeses] = useState([]);
    const [selectedFruitVegetables, setSelectedFruitVegetables] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [addToCartClicked, setAddToCartClicked] = useState(false);
    const [pizzaOneToppings, setPizzaOneToppings] = useState([]);


    const combos = [
        {
            id: 0,
            name: 'Special Combo',
            cdescrip: '2 Medium pizzas, 6 toppings',
            description: (
                <div>
                    2 Medium Pizzas
                    <br />
                    6 Toppings combined
                </div>
            ),
            price: 26.99,
        },
        {
            id: 1,
            name: 'COMBO 1',
            cdescrip: '2 Small pizzas, 6 toppings',
            description: (
                <div>
                    2 Small Pizzas
                    <br />
                    6 Toppings combined
                </div>
            ),
            price: 21.99,
        },
        {
            id: 2,
            name: 'COMBO 2',
            cdescrip: '1 Medium classic pizza',
            description: (
                <div>
                    1 Medium Classic Pizza
                </div>
            ),
            price: 17.49,
        },
        {
            id: 3,
            name: 'COMBO 3',
            cdescrip: '1 Large pizza, 1 topping',
            description: (
                <div>
                    1 Large Pizza
                    <br />
                    1 Topping
                    <br />
                    Pick-up Only
                </div>
            ),
            price: 11.99,
        },
        {
            id: 4,
            name: 'COMBO 4',
            cdescrip: '1 Large pizza, 3 toppings, 4 pack of Coke',
            description: (
                <div>
                    1 Large Pizza
                    <br />
                    3 Toppings
                    <br />
                    4 pack of Coke
                </div>
            ),
            price: 23.99,
        },
        {
            id: 5,
            name: 'COMBO 5',
            cdescrip: '1 Extra large pizza, 3 toppings',
            description: (
                <div>
                    1 Extra Large Pizza
                    <br />
                    3 Toppings
                </div>
            ),
            price: 22.99,
        },
        {
            id: 6,
            name: 'COMBO 6',
            cdescrip: '2 Large pizzas, 6 toppings',
            description: (
                <div>
                    2 Large Pizzas
                    <br />
                    6 Toppings combined
                </div>
            ),
            price: 33.99,
        },
    ];

    useEffect(() => {
        // Fetch combo data based on the 'id' from the URL parameters
        if (id) {
            const comboId = parseInt(id, 10);
            const selectedCombo = combos.find((c) => c.id === comboId);

            if (selectedCombo) {
                setCombo(selectedCombo);
            }
        }
        // eslint-disable-next-line
    }, [id]);

    useEffect(() => {
        if (addToCartClicked) {
            const selectedToppings = [...selectedMeats, ...selectedCheeses, ...selectedFruitVegetables];

            const pizza = {
                name: `Pizza ${currentPizza} - ${combo.name}`,
                description: `Toppings: ${selectedToppings.join(', ')}`,
                price: calculatePizzaPrice(selectedToppings),
                quantity: 1,
            };
            addToCart(pizza);

            // Change the current pizza to the next one
            setCurrentPizza(currentPizza === 1 ? 2 : 1);
            setAlertMessage('Combo added to cart');

            // Reset the addToCartClicked state
            setAddToCartClicked(false);
        }
        // eslint-disable-next-line
    }, [addToCartClicked, selectedMeats, selectedCheeses, selectedFruitVegetables, currentPizza, combo]);

    const handleMeatChange = (e) => {
        const meat = e.target.value;
        setSelectedMeats((prevMeats) =>
            prevMeats.includes(meat)
                ? prevMeats.filter((item) => item !== meat)
                : [...prevMeats, meat]
        );
    };

    const handleCheeseChange = (e) => {
        const cheese = e.target.value;
        setSelectedCheeses((prevCheeses) =>
            prevCheeses.includes(cheese)
                ? prevCheeses.filter((item) => item !== cheese)
                : [...prevCheeses, cheese]
        );
    };

    const handleFruitVegetableChange = (e) => {
        const fruitVegetable = e.target.value;
        setSelectedFruitVegetables((prevFruitVegetables) =>
            prevFruitVegetables.includes(fruitVegetable)
                ? prevFruitVegetables.filter((item) => item !== fruitVegetable)
                : [...prevFruitVegetables, fruitVegetable]
        );
    };

    const handleAddToCart = (e) => {
        e.preventDefault();

        const selectedToppings = [...selectedMeats, ...selectedCheeses, ...selectedFruitVegetables];

        if (currentPizza === 1) {
            setPizzaOneToppings(selectedToppings);
            setCurrentPizza(2);
            setAlertMessage('Pizza One added to cart');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Clear the selected checkboxes
            setSelectedMeats([]);
            setSelectedCheeses([]);
            setSelectedFruitVegetables([]);
            if ([2, 3, 4, 5].includes(combo.id)) {
                const comboDescription = `${selectedToppings.join(', ')}`;
                const comboPizza = {
                    name: `${combo.name}`,
                    description: comboDescription,
                    price: calculatePizzaPrice([...pizzaOneToppings, ...selectedToppings]),
                    quantity: 1,
                };
                addToCart(comboPizza);
                navigate('/Checkout');
            }
        } else {
            // Pizza Two customization is complete; add the combo to cart
            const comboDescription = `Pizza 1 toppings: ${pizzaOneToppings.join(', ')}. Pizza 2 toppings: ${selectedToppings.join(', ')}`;
            const comboPizza = {
                name: `${combo.name}`,
                description: comboDescription,
                price: calculatePizzaPrice([...pizzaOneToppings, ...selectedToppings]),
                quantity: 1,
            };

            addToCart(comboPizza);

            // Reset the customization for the next combo
            setPizzaOneToppings([]);
            setCurrentPizza(1);
            setAlertMessage('Combo added to cart');
            navigate('/Checkout');
        }
    };


    const calculatePizzaPrice = (selectedToppings) => {
        if (!combo) return 0;

        const baseComboPrice = combo.price;

        // Define topping limits for each combo
        const comboToppingLimits = {
            0: 6,
            1: 6,
            2: 3,
            3: 1,
            4: 3,
            5: 3,
            6: 6
        };


        const toppingLimit = comboToppingLimits[combo.id];


        const comboAdditionalToppingsCosts = {
            0: 2.0,
            1: 1.5,
            2: 2.0,
            3: 2.5,
            4: 2.5,
            5: 2.75,
            6: 2.5
        };

        // Adjust topping limit and cost for "Extra Sauce"
        const extraSauceTopping = 'Extra Sauce (free)';
        const chickenTopping = 'Chicken';

        // Exclude "Extra Sauce" from affecting topping limit and cost
        if (selectedToppings.includes(extraSauceTopping)) {
            const extraSauceIndex = selectedToppings.indexOf(extraSauceTopping);
            selectedToppings.splice(extraSauceIndex, 1);
        }

        // Count "Chicken" as two toppings based on topping limit
        const chickenCount = Math.min(selectedToppings.filter(topping => topping === chickenTopping).length * 2, toppingLimit);

        // Calculate the count of all other toppings
        const otherToppingsCount = selectedToppings.filter(topping => topping !== chickenTopping).length;

        const extraToppingsCostPerCombo = comboAdditionalToppingsCosts[combo.id];
        const extraToppingsCount = Math.max(0, otherToppingsCount - toppingLimit);
        const extraToppingsCost = extraToppingsCount * extraToppingsCostPerCombo;

        // Calculate the total price considering the combo price and extra toppings cost
        const totalPrice = baseComboPrice + extraToppingsCost + (chickenCount * extraToppingsCostPerCombo);

        return totalPrice.toFixed(2);
    };




    return (
        <Layout alertMessage={alertMessage} setAlertMessage={setAlertMessage}>
            <div className='header'>
                <h1>
                    {combo && [2, 3, 4, 5].includes(combo.id) ? 'Customize Pizza' : `Customize Pizza ${currentPizza}`}
                </h1>
            </div>
            <form className='BYOP-Creator'>
                <div className='BYOPContainer'>
                    <div className='Selection'>
                        <h3>SELECT YOUR MEATS</h3>
                        <div className='options'>
                            {[
                                'Anchovies',
                                'Pepperoni',
                                'Chicken',
                                'Bacon',
                                'Italian Sausage',
                                'Ham',
                                'Ground Beef',
                            ].map((meat) => (
                                <label key={meat}>
                                    <input
                                        type='checkbox'
                                        name='meat'
                                        value={meat}
                                        checked={selectedMeats.includes(meat)}
                                        onChange={handleMeatChange}
                                    />
                                    {meat}
                                </label>
                            ))}
                            <p id='note'>Please note chicken will count as two toppings.</p>
                        </div>
                    </div>

                    <div className='Selection'>
                        <h3>SELECT YOUR CHEESES</h3>
                        <div className='options'>
                            {[
                                'Asiago Cheese',
                                'Extra Cheese',
                                'Cheddar Cheese',
                                'Feta Cheese',
                                'Parmesan Cheese',
                            ].map((cheese) => (
                                <label key={cheese}>
                                    <input
                                        type='checkbox'
                                        name='cheese'
                                        value={cheese}
                                        checked={selectedCheeses.includes(cheese)}
                                        onChange={handleCheeseChange}
                                    />
                                    {cheese}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className='Selection'>
                        <h3>SELECT YOUR FRUITS/VEGETABLES</h3>
                        <div className='options'>
                            {[
                                'Pineapple',
                                'Onions',
                                'Green Olives',
                                'Italian Spices',
                                'Garlic',
                                'Garlic Butter Crust',
                                'Mushrooms',
                                'Red Onions',
                                'Black Olives',
                                'Hot Peppers',
                                'Green Peppers',
                                'Broccoli',
                                'Tomatoes',
                                'Roasted Red Peppers',
                                'Jalapeno Peppers',
                                'Extra Sauce (free)',
                            ].map((fruitVegetable) => (
                                <label key={fruitVegetable}>
                                    <input
                                        type='checkbox'
                                        name='fruitVegetable'
                                        value={fruitVegetable}
                                        checked={selectedFruitVegetables.includes(fruitVegetable)}
                                        onChange={handleFruitVegetableChange}
                                    />
                                    {fruitVegetable}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className='SelectionF'>
                        <p><strong>Total is ${calculatePizzaPrice([...pizzaOneToppings, ...selectedMeats, ...selectedCheeses, ...selectedFruitVegetables])}
                        </strong></p>
                        <button id='checkB' onClick={handleAddToCart}>
                            {currentPizza === 1 ? 'Add Pizza to Cart' : 'Add Pizza Two to Cart'}
                        </button>
                    </div>
                </div>
            </form>
        </Layout>
    );
}

export default connect(null, { addToCart })(ComboCustomization);

