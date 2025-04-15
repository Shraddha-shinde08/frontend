import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
//import RestaurantForm from './pages/RestaurantForm/RestaurantForm'; 
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}  {/* ✅ Pass setShowLogin */}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} /> {/* ✅ Pass to Navbar */}
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          </Routes>   
      </div>
      <Footer />
    </>
  );
};

export default App;
