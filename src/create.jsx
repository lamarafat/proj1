import React from 'react';

export default function Create() {
 
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h2 className="text-center mb-4">Add New Product</h2>
                    <form className='form '>
                        <div className="mb-3 shadow">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                required
                                placeholder="Enter product name"
                            />
                        </div>

                        <div className="mb-3 shadow">
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                required
                                placeholder="Enter product description"
                            ></textarea>
                        </div>

                        <div className="mb-3 shadow">
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                required
                                placeholder="Enter product price"
                            />
                        </div>

                        <div className="mb-3 shadow">
                            <input
                                type="url"
                                className="form-control"
                                id="image"
                                name="image"
                                required
                                placeholder="Enter image URL"
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary mb-5 shadow">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
