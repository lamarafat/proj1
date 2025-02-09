import React from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Loading from './component/Loading';

export default function Products() {
  
  const{data, loading, error} = useFetch('https://dummyjson.com/products');
  if(loading){
    return <Loading />
  }
  const {id} = useParams();

  return (
    <>
        {error ? <div className="alert alert-danger">{error}</div> : ' '}
        <div className="container">
            <div className="row">
                {data.products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <img
                                    src={product.thumbnail}
                                    className="card-img-top cover"
                                    alt={product.name}
                                />
                                <h2 className="card-title">{product.name}</h2>
                                <p className="card-text text-muted">{product.description}</p>
                                <h3 className="card-subtitle mb-2 text-success">
                                    Price: ${product.price}
                                </h3>
                                <Link to={`/details/${product.id}`} className="btn btn-primary">
                                    DETAILS
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
);
}
