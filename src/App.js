import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsNew from './components/Pages/WhatsNew/WhatsNew';
import Menu from './components/Pages/Menu/Menu';
import SideOrders from './components/Pages/SideOrders/SideOrders';
import Beverages from './components/Pages/Beverages/Beverages';
import DeliveryMap from './components/Pages/DeliveryMap/DeliveryMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BYOPizza from './components/Pages/BYOPizza/BYOPizza';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WhatsNew />} />
        <Route path="/WhatsNew" element={<WhatsNew />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/BYOPizza" element={<BYOPizza />} />
        <Route path="/SideOrders" element={<SideOrders />} />
        <Route path="/Beverages" element={<Beverages />} />
        <Route path="/DeliveryMap" element={<DeliveryMap />} />
      </Routes>
    </Router>
  );
}

export default App;