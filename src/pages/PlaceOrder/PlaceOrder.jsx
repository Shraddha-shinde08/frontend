import React, { useState } from 'react';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        paymentMethod: 'cod', // Default: Cash on Delivery
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order Placed:', formData);
        alert('Order placed successfully!');
    };

    return (
        <div className="place-order-container">
            <h2>Place Your Order</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Address:</label>
                <textarea name="address" value={formData.address} onChange={handleChange} required />

                <label>Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                <label>Payment Method:</label>
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                    <option value="cod">Cash on Delivery</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                </select>

                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default PlaceOrder;
