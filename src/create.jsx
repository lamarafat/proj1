import React, { useState } from 'react';

export default function Create() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Added:', formData); // Log the form data instead of making an API call
    alert('Product added successfully!');
    
    // Reset form after submission
    setFormData({
      name: '',
      description: '',
      price: '',
      image: ''
    });
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form onSubmit={handleSubmit} className="product-form container mt-5">
            <h2 className="text-center mb-4">Add New Product</h2>
            
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Product Name:</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name" 
                required 
                placeholder="Enter product name" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description:</label>
              <textarea 
                className="form-control" 
                id="description" 
                name="description" 
                required 
                placeholder="Enter product description" 
                value={formData.description} 
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price ($):</label>
              <input 
                type="number" 
                className="form-control" 
                id="price" 
                name="price" 
                required 
                placeholder="Enter product price" 
                value={formData.price} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image URL:</label>
              <input 
                type="url" 
                className="form-control" 
                id="image" 
                name="image" 
                required 
                placeholder="Enter image URL" 
                value={formData.image} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary mb-5">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
