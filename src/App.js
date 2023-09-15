import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsNew from './components/Pages/Menu/WhatsNew';
import Menu from './components/Pages/Menu/Menu';
import SideOrders from './components/Pages/Menu/SideOrders';
import Beverages from './components/Pages/Menu/Beverages';
import DeliveryMap from './components/Pages/DeliveryMap/DeliveryMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BYOPizza from './components/Pages/BYOPizza/BYOPizza';
import Classics from './components/Pages/Menu/Classics'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import ShoppingCart from './components/Cart/ShoppingCart';
import ComboCustomization from './components/Pages/BYOPizza/Combos';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<WhatsNew />} />
          <Route path="/WhatsNew" element={<WhatsNew />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/BYOPizza" element={<BYOPizza />} />
          <Route path="/ClassicPizzas" element={<Classics />} />
          <Route path="/SideOrders" element={<SideOrders />} />
          <Route path="/Beverages" element={<Beverages />} />
          <Route path="/DeliveryMap" element={<DeliveryMap />} />
          <Route path="/checkout" element={<ShoppingCart />} />
          <Route path="/combo/:id" element={<ComboCustomization />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;