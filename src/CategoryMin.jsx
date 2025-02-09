import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from './component/Loading';
import useFetch from './hooks/useFetch';

export default function CategoryMin() {
  const {data, loading, error} = useFetch('https://dummyjson.com/products/categories');
  if(loading){
    return <Loading />
  }
  const {slug} = useParams();

  return (
    <>
        {error ? <div className="alert alert-danger">{error}</div> : ' '}
        <div className="container">
            <div className="row">
            {data.slice(0, 6).map((category) => (
                    <div key={category.slug} className="col-md-4 mb-4 mt-4">
                        <div className="card bg-light h-100 shadow-sm">
                            <div className="card-body">
                                
                                <Link to={`/CatList/${category.slug}`} className="btn btn-primary">
                                {category.name}
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
