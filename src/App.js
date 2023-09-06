import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsNew from './components/Pages/WhatsNew/WhatsNew';
import Specialties from './components/Pages/Specialties/Specialties';
import CYO from './components/Pages/CYO/CYO';
import Toppings from './components/Pages/Toppings/Toppings';
import SideOrders from './components/Pages/SideOrders/SideOrders';
import Beverages from './components/Pages/Beverages/Beverages';
import DeliveryMap from './components/Pages/DeliveryMap/DeliveryMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WhatsNew />} />
        <Route path="/WhatsNew" element={<WhatsNew />} />
        <Route path="/Specialties" element={<Specialties />} />
        <Route path="/CYO" element={<CYO />} />
        <Route path="/Toppings" element={<Toppings />} />
        <Route path="/SideOrders" element={<SideOrders />} />
        <Route path="/Beverages" element={<Beverages />} />
        <Route path="/DeliveryMap" element={<DeliveryMap />} />
      </Routes>
    </Router>
  );
}

export default App;