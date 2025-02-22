import React, { useState } from 'react';
import './RestaurantForm.css';

const RestaurantForm = () => {
    const [formData, setFormData] = useState({
        restaurantName: '',
        ownerName: '',
        contact: '',
        productName: '',
        price: '',
        category: '',
        image: null
    });

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Restaurant Product Submitted:', formData);
        alert('Product added successfully!');
    };

    return (
        <div className="restaurant-form-container">
            <h2>Add Your Product</h2>
            <form onSubmit={handleSubmit}>
                <label>Restaurant Name:</label>
                <input type="text" name="restaurantName" value={formData.restaurantName} onChange={handleChange} required />

                <label>Owner Name:</label>
                <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} required />

                <label>Contact Number:</label>
                <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />

                <label>Product Name:</label>
                <input type="text" name="productName" value={formData.productName} onChange={handleChange} required />

                <label>Price:</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} required />

                <label>Category:</label>
                <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    <option value="fast-food">Fast Food</option>
                    <option value="desserts">Desserts</option>
                    <option value="beverages">Beverages</option>
                </select>

                <label>Upload Product Image:</label>
                <input type="file" name="image" onChange={handleChange} required />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RestaurantForm;
