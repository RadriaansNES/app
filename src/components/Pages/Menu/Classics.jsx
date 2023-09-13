import React from 'react';
import Layout from '../../LayoutComp/Layout';

function Classics() {
    return (
        <Layout>
            <div className='menu'>
                <div className='header' id='ClassicsZa'>
                    <h1>CLASSIC PIZZAS</h1>
                </div>
                <div className='PizzaTypes'>
                    <div>
                        <h2>Deluxe</h2>
                        <p>Pizza img. </p>
                        <p>Pepperoni, Bacon, Mushrooms, Green Peppers & Onions</p>
                    </div>
                    <div>
                        <h2>Truly Canadian</h2>
                        <p>Pizza img.</p>
                        <p>Mozzarella and Cheddar Cheese, Pepperoni, Bacon & Mushrooms</p>
                    </div>
                    <div>
                        <h2>Big Meat</h2>
                        <p>Pizza img.</p>
                        <p>Pepperoni, Bacon, Sausage, Ham & Ground Beef</p>
                    </div>
                    <div>
                        <h2>Vegetarian</h2>
                        <p>Pizza img.</p>
                        <p>Mushrooms, Green Peppers, Onions, Tomatoes & Green Olives</p>
                    </div>
                    <div>
                        <h2>Hawaiian</h2>
                        <p>Pizza img.</p>
                        <p>Ham, Pineapple & Extra Cheese</p>
                    </div>
                    <div>
                        <h2>Chicken Bacon Ranch</h2>
                        <p>Pizza img.</p>
                        <p>Ranch Base, Cheeseblend, Grilled Chicken Strips, Bacon & Parm to Finish</p>
                    </div>  
                
                </div>
            </div>
        </Layout>
    );
}

export default Classics;