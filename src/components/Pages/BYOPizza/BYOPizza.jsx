import React from 'react';
import Layout from '../../LayoutComp/Layout';

function BYOPizza() {
  return (
    <Layout>
      <div className='header'>
        <h1>Build Your Pizza</h1>
      </div>
      <form className='BYOP-Creator'>
        <h3>SELECT YOUR SIZE</h3>
        <div className='BYOP-Creator-Sizes'></div>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">HTML</label><br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label for="css">CSS</label><br />
        <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
      </form>
    </Layout>
  );
}

export default BYOPizza;