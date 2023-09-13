import React from 'react';
import Layout from '../../LayoutComp/Layout';

function WhatsNew() {
  return (
    <Layout>
      <div className='header'>
        <h1>
          <button>START YOUR ORDER</button></h1>
      </div>
      <div className='main'>
        <div className='mainCombo'>
          <p className='maininfo'>2 Medium Pizzas<br />6 Toppings combined</p>
          <p className='mainprice'>Only<br/><span>$26.99</span><em><br/>+tax</em></p>
        </div>
        <div className='combos'>
          <div className='combocell'>
            <h4>COMBO 1</h4>
            <p>2 Small Pizzas<br />6 Toppings combined</p>
            <p className='price'>$21.99</p>
          </div>
          <div className='combocell'>
            <h4>COMBO 2</h4>
            <p>1 Medium Classic Pizza</p>
            <p className='price'>$17.49</p>
          </div>
          <div className='combocell'>
            <h4>COMBO 3</h4>
            <p>1 Large Pizza<br />1 Topping<br/>Pick-up Only</p>
            <p className='price'>$11.99</p>
          </div>
          <div className='combocell'>
            <h4>COMBO 4</h4>
            <p>1 Large Pizza<br />3 Toppings<br/>plus 4 pack of Coke</p>
            <p className='price'>$23.99</p>
          </div>
          <div className='combocell'>
            <h4>COMBO 5</h4>
            <p>1 Extra Large Pizza<br />3 Toppings</p>
            <p className='price'>$22.99</p>
          </div>
          <div className='combocell'>
            <h4>COMBO 6</h4>
            <p>2 Large Pizzas<br />6 Toppings combined</p>
            <p className='price'>$33.99</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WhatsNew;