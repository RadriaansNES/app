import React, { useState, useEffect, useMemo } from 'react';
import Layout from '../../LayoutComp/Layout';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/actions';

function BYOPizza({ addToCart }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedMeats, setSelectedMeats] = useState([]);
  const [selectedCheeses, setSelectedCheeses] = useState([]);
  const [selectedFruitVegetables, setSelectedFruitVegetables] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');

  // Define the base prices and extra topping rates using useMemo
  const basePrices = useMemo(
    () => ({
      Small: 9.0,
      Medium: 11.5,
      Large: 14.0,
      'Extra-Large': 18.0,
    }),
    []
  );

  const extraToppingRates = useMemo(
    () => ({
      Small: 1.5,
      Medium: 2.0,
      Large: 2.5,
      'Extra-Large': 2.75,
    }),
    []
  );

  useEffect(() => {
    // Calculate the total price based on the selected size and toppings
    let pizzaPrice = basePrices[selectedSize] || 0;

    // Calculate the number of selected toppings
    let toppingQuantity =
      selectedMeats.length + selectedCheeses.length + selectedFruitVegetables.length;

    // Handle special cases for "Extra Sauce" and "Chicken"
    selectedMeats.forEach((meat) => {
      if (meat === 'Chicken') {
        toppingQuantity++; // Count "Chicken" as an extra topping
      }
    });

    // Check for "Extra Sauce" and exclude it from the calculation
    if (selectedFruitVegetables.includes('Extra Sauce (free)')) {
      toppingQuantity--; // Exclude "Extra Sauce" from topping count
    }

    // Calculate the total price with adjusted topping quantity and rate
    pizzaPrice += toppingQuantity * (extraToppingRates[selectedSize] || 0);

    // Update the total price
    setTotalPrice(pizzaPrice);
  }, [selectedSize, selectedMeats, selectedCheeses, selectedFruitVegetables, basePrices, extraToppingRates]);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleMeatChange = (e) => {
    const meat = e.target.value;
    setSelectedMeats((prevMeats) =>
      prevMeats.includes(meat)
        ? prevMeats.filter((item) => item !== meat) // Deselect if already selected
        : [...prevMeats, meat] // Select if not selected
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
    e.preventDefault(); // Prevent page reload
    // Create the custom pizza object with a default quantity of 1
    const customPizza = {
      name: `Custom ${selectedSize} Pizza`,
      description: `Toppings: ${[...selectedMeats, ...selectedCheeses, ...selectedFruitVegetables].join(', ')}`,
      price: totalPrice,
      quantity: 1, // Default quantity is 1
    };
  
    // Add the custom pizza to the cart
    addToCart(customPizza);

    // Set the alert message
    setAlertMessage('Custom pizza added to cart.');

    // Clear the alert message after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      setAlertMessage('');
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  return (
    <Layout alertMessage={alertMessage} setAlertMessage={setAlertMessage}>
      <div className='header'>
        <h1>Build Your Pizza</h1>
      </div>
      <form className='BYOP-Creator'>
        <div className='BYOPContainer'>
          <div className='Selection'>
            <h3>SELECT YOUR SIZE</h3>
            <div className='options'>
              {['Small', 'Medium', 'Large', 'Extra-Large'].map((size) => (
                <label key={size}>
                  <input
                    type='radio'
                    name='size'
                    value={size}
                    checked={selectedSize === size}
                    onChange={handleSizeChange}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>
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
                'Extra Sauce (free)', // Note: "Extra Sauce" is listed here
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
            <p><strong>Total is ${totalPrice}</strong></p>
            <button id='checkB' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default connect(null, { addToCart })(BYOPizza);