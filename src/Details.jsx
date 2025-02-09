import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './component/Loading';
import useFetch from './hooks/useFetch';

export default function Details() {
    const { id } = useParams();
    const { data, error, loading } = useFetch(`https://dummyjson.com/products/${id}`);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center">
                            <img
                                src={data.thumbnail}
                                className="card-img-top mb-3 cover"
                                alt={data.title}
                            />
                            <h2 className="card-title">{data.title}</h2>
                            <p className="card-text text-muted">{data.description}</p>
                            <h3 className="card-subtitle mb-2 text-success">
                                Price: ${data.price}
                            </h3>
                            <p className="card-text">
                                <strong>Brand:</strong> {data.brand}
                            </p>
                            <p className="card-text">
                                <strong>Category:</strong> {data.category}
                            </p>
                            <p className="card-text">
                                <strong>Rating:</strong> {data.rating} / 5
                            </p>
                            <h3 className="mt-4">Reviews:</h3>
                            {data.reviews && data.reviews.length > 0 ? (
                                data.reviews.map((review) => (
                                    <div key={review.id} className="card mb-3">
                                        <div className="card-body">
                                            <p>
                                                <span className="fw-bold">Rating: </span>
                                                {review.rating} / 5
                                            </p>
                                            <p>
                                                <span className="fw-bold">Review: </span>
                                                {review.comment}
                                            </p>
                                            <p>
                                                <span className="fw-bold">Review Date: </span>
                                                {new Date(review.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No reviews available.</p>
                            )}
                            <div className="mt-4">
                                <Link to="/" className="btn btn-primary">
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}