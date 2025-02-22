import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();

    return (
        <div className='cart-container'>
            <h2>Your Cart</h2>
            {/* Cart items will be displayed here */}
            <button className="place-order-btn" onClick={() => navigate('/order')}>
                Place Order
            </button>
        </div>
    );
};

export default Cart;
