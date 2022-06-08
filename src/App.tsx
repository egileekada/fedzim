import React from 'react';   
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import Navbar from './components/sections/Navbar';

function App() {
  return (  
    <Router>  
      <Navbar />
      <Routes>     
        <Route path='/' element={<HomeScreen />}/> 
        <Route path='/aboutus' element={<AboutUs />}/> 
        <Route path='/product' element={<ProductScreen />}/> 
        <Route path='/contactus' element={<ContactUs />}/> 
      </Routes>
    </Router>
  );
}

export default App;
