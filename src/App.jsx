import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import RestaurantForm from './pages/RestaurantForm/RestaurantForm'; // ✅ Ensure this import is correct

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/add-restaurant' element={<RestaurantForm />} /> {/* ✅ Route for Restaurant Form */}
        </Routes>   
      </div>
      <Footer />
    </>
  );
};

export default App;
