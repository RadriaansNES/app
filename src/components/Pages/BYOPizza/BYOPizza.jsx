import React, { useState } from 'react';
import Layout from '../../LayoutComp/Layout';

function BYOPizza() {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedMeats, setSelectedMeats] = useState([]);
  const [selectedCheeses, setSelectedCheeses] = useState([]);
  const [selectedFruitVegetables, setSelectedFruitVegetables] = useState([]);

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

  return (
    <Layout>
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
            <p><strong>Total is $X</strong></p>
            <button id='checkB'>Add to Cart</button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default BYOPizza;