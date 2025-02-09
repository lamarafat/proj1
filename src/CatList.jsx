import React from 'react';
import Loading from './component/Loading';
import useFetch from './hooks/useFetch';
import { useParams } from 'react-router-dom';

export default function CatList() {
    const { slug } = useParams(); 
    const apiUrl = slug ? `https://dummyjson.com/products/category/${slug}` : null;
    const { data, error, loading } = useFetch(apiUrl);
    console.log("Fetched data:", data);


    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container">
            <h1 className="my-4">Products in {slug}</h1>
            <div className="row">
                {data?.products?.length > 0 ? (
                    data.products.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={product.thumbnail}
                                    className="card-img-top"
                                    alt={product.title}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h2 className="card-title mt-3">{product.title}</h2>
                                    <p className="card-text text-muted">{product.description}</p>
                                    <h3 className="card-subtitle mb-2 text-success">
                                        Price: ${product.price}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available in this category.</p>
                )}
            </div>
        </div>
    );
}
