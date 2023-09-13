import React from 'react';
import Layout from '../../LayoutComp/Layout';

function Menu() {
  return (
    <Layout>
      <div className='menu'>
        <div className='header'>
          <h1>MENU</h1>
        </div>
        <div className='BYOP'>
          <div>
            <h3>Build Your Own Pizza</h3>
          </div>
          <div className='BYOP-Sizes'>
            <a href='/BYOPizza?s=1'>Small (11") size</a>
            <a href='/BYOPizza?s=2'>Medium (13") size</a>
            <a href='/BYOPizza?s=3'>Large (15") size</a>
            <a href='/BYOPizza?s=4'>Extra Large (18") size</a>
          </div>
        </div>
        <div className='Types'>
          <div>
            <a href='/ClassicPizzas'>
              <h2>Classics</h2>
              <p>Classic pizza img. </p>
            </a>
          </div>
          <div>
            <h2>Specialties</h2>
            <p>Spec. img. </p>
          </div>
          <div>
            <h2>Super Specialties</h2>
            <p>Super spec. img. </p>
          </div>
          <div>
            <h2>Subs</h2>
            <p>Subs img. </p>

          </div>
          <div>
            <h2>Salads</h2>
            <p>Salad img. </p>

          </div>
          <div>
            <h2>Sides</h2>
            <p>Sides img. </p>

          </div>
          <div>
            <h2>Beverages</h2>
            <p>Bev img. </p>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Menu;