import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const navigate = useNavigate();

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
        
        {/* ✅ Place Order Button */}
        <button className="place-order-btn" onClick={() => navigate('/order')}>
            Place Order
        </button>
    </div>
  );
}

export default Home;
